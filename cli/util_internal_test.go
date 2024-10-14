package cli

import (
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestDurationDisplay(t *testing.T) {
	t.Parallel()
	for _, testCase := range []struct {
		Duration string
		Expected string
	}{
		{"-1s", "<1m"},
		{"0s", "0s"},
		{"1s", "<1m"},
		{"59s", "<1m"},
		{"1m", "1m"},
		{"1m1s", "1m"},
		{"2m", "2m"},
		{"59m", "59m"},
		{"1h", "1h"},
		{"1h1m1s", "1h1m"},
		{"2h", "2h"},
		{"23h", "23h"},
		{"24h", "1d"},
		{"24h1m1s", "1d"},
		{"25h", "1d1h"},
	} {
		testCase := testCase
		t.Run(testCase.Duration, func(t *testing.T) {
			t.Parallel()
			d, err := time.ParseDuration(testCase.Duration)
			require.NoError(t, err)
			actual := durationDisplay(d)
			assert.Equal(t, testCase.Expected, actual)
		})
	}
}

func TestExtendedParseDuration(t *testing.T) {
	t.Parallel()
	for _, testCase := range []struct {
		Duration   string
		Expected   time.Duration
		ExpectedOk bool
	}{
		{"1d", 24 * time.Hour, true},
		{"1y", 365 * 24 * time.Hour, true},
		{"10s", 10 * time.Second, true},
		{"1m", 1 * time.Minute, true},
		{"20h", 20 * time.Hour, true},
		{"10y10d10s", 10*365*24*time.Hour + 10*24*time.Hour + 10*time.Second, true},
		{"10ms", 10 * time.Millisecond, true},
		{"5y10d10s5y2ms8ms", 10*365*24*time.Hour + 10*24*time.Hour + 10*time.Second + 10*time.Millisecond, true},
		{"10yz10d10s", 0, false},
	} {
		testCase := testCase
		t.Run(testCase.Duration, func(t *testing.T) {
			t.Parallel()
			actual, err := extendedParseDuration(testCase.Duration)
			if testCase.ExpectedOk {
				require.NoError(t, err)
				assert.Equal(t, testCase.Expected, actual)
			} else {
				assert.Error(t, err)
			}
		})
	}
}

func TestRelative(t *testing.T) {
	t.Parallel()
	assert.Equal(t, relative(time.Minute), "in 1m")
	assert.Equal(t, relative(-time.Minute), "1m ago")
	assert.Equal(t, relative(0), "now")
}
