import type { FC, HTMLProps } from "react";
import type { Interpolation, Theme } from "@emotion/react";
import { YAxisCaptionHeight } from "./YAxis";
import { formatTime } from "./utils";
import { XAxisLabelsHeight, XAxisRowsGap } from "./constants";

export const XAxisWidth = 130;
export const XAxisSidePadding = 16;

type XAxisProps = HTMLProps<HTMLDivElement> & {
	ticks: number[];
	scale: number;
};

export const XAxis: FC<XAxisProps> = ({ ticks, scale, ...htmlProps }) => {
	return (
		<div css={styles.root} {...htmlProps}>
			<XAxisLabels>
				{ticks.map((tick) => (
					<XAxisLabel key={tick} width={XAxisWidth}>
						{formatTime(tick, scale)}
					</XAxisLabel>
				))}
			</XAxisLabels>
			{htmlProps.children}
			<XGrid columns={ticks.length} />
		</div>
	);
};

export const XAxisLabels: FC<HTMLProps<HTMLUListElement>> = (props) => {
	return <ul css={styles.labels} {...props} />;
};

type XAxisLabelProps = HTMLProps<HTMLLIElement> & {
	width: number;
};

export const XAxisLabel: FC<XAxisLabelProps> = ({ width, ...htmlProps }) => {
	return (
		<li
			css={[
				styles.label,
				{
					// To centralize the labels between columns, we need to:
					// 1. Set the label width to twice the column width.
					// 2. Shift the label to the left by half of the column width.
					// Note: This adjustment is not applied to the first element,
					// as the 0 label/value is not displayed in the chart.
					width: width * 2,
					"&:not(:first-child)": {
						marginLeft: -width,
					},
				},
			]}
			{...htmlProps}
		/>
	);
};

export const XAxisSections: FC<HTMLProps<HTMLDivElement>> = (props) => {
	return <div css={styles.sections} {...props} />;
};

export const XAxisRows: FC<HTMLProps<HTMLDivElement>> = (props) => {
	return <div css={styles.rows} {...props} />;
};

type XAxisRowProps = HTMLProps<HTMLDivElement> & {
	yAxisLabelId: string;
};

export const XAxisRow: FC<XAxisRowProps> = ({ yAxisLabelId, ...htmlProps }) => {
	const syncYAxisLabelHeightToXAxisRow = (rowEl: HTMLDivElement | null) => {
		if (!rowEl) {
			return;
		}

		// Selecting a label with special characters (e.g.,
		// #coder_metadata.container_info[0]) will fail because it is not a valid
		// selector. To handle this, we need to query by the id attribute and escape
		// it with quotes.
		const yAxisLabel = document.querySelector<HTMLSpanElement>(
			`[id="${encodeURIComponent(yAxisLabelId)}"]`,
		);
		if (!yAxisLabel) {
			console.warn(`Y-axis label with id ${yAxisLabelId} not found.`);
			return;
		}
		yAxisLabel.style.height = `${rowEl.clientHeight}px`;
	};

	return (
		<div
			css={styles.row}
			{...htmlProps}
			aria-labelledby={yAxisLabelId}
			ref={syncYAxisLabelHeightToXAxisRow}
		/>
	);
};

type XGridProps = HTMLProps<HTMLDivElement> & {
	columns: number;
};

export const XGrid: FC<XGridProps> = ({ columns, ...htmlProps }) => {
	return (
		<div css={styles.grid} role="presentation" {...htmlProps}>
			{[...Array(columns).keys()].map((key) => (
				<div key={key} css={[styles.column, { width: XAxisWidth }]} />
			))}
		</div>
	);
};

// A dashed line is used as a background image to create the grid.
// Using it as a background simplifies replication along the Y axis.
const dashedLine = (color: string) => `<svg width="2" height="446" viewBox="0 0 2 446" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 440.932L1.75 446L0.75 446L0.75 440.932L1.75 440.932ZM1.75 420.659L1.75 430.795L0.749999 430.795L0.749999 420.659L1.75 420.659ZM1.75 400.386L1.75 410.523L0.749998 410.523L0.749998 400.386L1.75 400.386ZM1.75 380.114L1.75 390.25L0.749998 390.25L0.749997 380.114L1.75 380.114ZM1.75 359.841L1.75 369.977L0.749997 369.977L0.749996 359.841L1.75 359.841ZM1.75 339.568L1.75 349.705L0.749996 349.705L0.749995 339.568L1.75 339.568ZM1.74999 319.295L1.74999 329.432L0.749995 329.432L0.749994 319.295L1.74999 319.295ZM1.74999 299.023L1.74999 309.159L0.749994 309.159L0.749994 299.023L1.74999 299.023ZM1.74999 278.75L1.74999 288.886L0.749993 288.886L0.749993 278.75L1.74999 278.75ZM1.74999 258.477L1.74999 268.614L0.749992 268.614L0.749992 258.477L1.74999 258.477ZM1.74999 238.204L1.74999 248.341L0.749991 248.341L0.749991 238.204L1.74999 238.204ZM1.74999 217.932L1.74999 228.068L0.74999 228.068L0.74999 217.932L1.74999 217.932ZM1.74999 197.659L1.74999 207.795L0.74999 207.795L0.749989 197.659L1.74999 197.659ZM1.74999 177.386L1.74999 187.523L0.749989 187.523L0.749988 177.386L1.74999 177.386ZM1.74999 157.114L1.74999 167.25L0.749988 167.25L0.749987 157.114L1.74999 157.114ZM1.74999 136.841L1.74999 146.977L0.749987 146.977L0.749986 136.841L1.74999 136.841ZM1.74999 116.568L1.74999 126.705L0.749986 126.705L0.749986 116.568L1.74999 116.568ZM1.74998 96.2955L1.74999 106.432L0.749985 106.432L0.749985 96.2955L1.74998 96.2955ZM1.74998 76.0228L1.74998 86.1591L0.749984 86.1591L0.749984 76.0228L1.74998 76.0228ZM1.74998 55.7501L1.74998 65.8864L0.749983 65.8864L0.749983 55.7501L1.74998 55.7501ZM1.74998 35.4774L1.74998 45.6137L0.749982 45.6137L0.749982 35.4774L1.74998 35.4774ZM1.74998 15.2047L1.74998 25.341L0.749982 25.341L0.749981 15.2047L1.74998 15.2047ZM1.74998 -4.37114e-08L1.74998 5.0683L0.749981 5.0683L0.749981 0L1.74998 -4.37114e-08Z" fill="${color}"/>
</svg>`;

const styles = {
	root: (theme) => ({
		display: "flex",
		flexDirection: "column",
		flex: 1,
		borderLeft: `1px solid ${theme.palette.divider}`,
		height: "fit-content",
		minHeight: "100%",
		position: "relative",
	}),
	labels: (theme) => ({
		margin: 0,
		listStyle: "none",
		display: "flex",
		width: "fit-content",
		alignItems: "center",
		borderBottom: `1px solid ${theme.palette.divider}`,
		height: XAxisLabelsHeight,
		padding: `0px ${XAxisSidePadding}px`,
		minWidth: "100%",
		flexShrink: 0,
		position: "sticky",
		top: 0,
		zIndex: 1,
		backgroundColor: theme.palette.background.default,
	}),
	label: (theme) => ({
		display: "flex",
		justifyContent: "center",
		flexShrink: 0,
		color: theme.palette.text.secondary,
	}),
	sections: {
		flex: 1,
	},
	rows: {
		display: "flex",
		flexDirection: "column",
		gap: XAxisRowsGap,
		padding: `${YAxisCaptionHeight}px ${XAxisSidePadding}px`,
	},
	row: {
		display: "flex",
		alignItems: "center",
		width: "fit-content",
		gap: 8,
		cursor: "pointer",
	},
	grid: {
		display: "flex",
		width: "100%",
		height: "100%",
		position: "absolute",
		top: 0,
		left: 0,
		zIndex: -1,
	},
	column: (theme) => ({
		flexShrink: 0,
		backgroundRepeat: "repeat-y",
		backgroundPosition: "right",
		backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(dashedLine(theme.palette.divider))}");`,
	}),
} satisfies Record<string, Interpolation<Theme>>;
