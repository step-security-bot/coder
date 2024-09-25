import type { WorkspaceTimings } from "api/typesGenerated";

export const WorkspaceTimingsResponse: WorkspaceTimings = {
	provisioner_timings: [
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:42.973852Z",
			ended_at: "2024-09-17T11:30:54.242279Z",
			stage: "init",
			source: "terraform",
			action: "initializing terraform",
			resource: "state file",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:54.692398Z",
			ended_at: "2024-09-17T11:30:54.978615Z",
			stage: "plan",
			source: "http",
			action: "read",
			resource:
				'module.jetbrains_gateway.data.http.jetbrains_ide_versions["GO"]',
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:54.701523Z",
			ended_at: "2024-09-17T11:30:54.713539Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "data.coder_workspace_owner.me",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:54.703545Z",
			ended_at: "2024-09-17T11:30:54.712092Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "data.coder_parameter.repo_base_dir",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:54.703799Z",
			ended_at: "2024-09-17T11:30:54.714985Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "module.dotfiles.data.coder_parameter.dotfiles_uri[0]",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:54.703996Z",
			ended_at: "2024-09-17T11:30:54.714505Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "module.coder-login.data.coder_workspace.me",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:54.70412Z",
			ended_at: "2024-09-17T11:30:54.713716Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "module.coder-login.data.coder_workspace_owner.me",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:54.704179Z",
			ended_at: "2024-09-17T11:30:54.715129Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "data.coder_parameter.image_type",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:54.704374Z",
			ended_at: "2024-09-17T11:30:54.710183Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "data.coder_parameter.region",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:54.708087Z",
			ended_at: "2024-09-17T11:30:54.981356Z",
			stage: "plan",
			source: "http",
			action: "read",
			resource:
				'module.jetbrains_gateway.data.http.jetbrains_ide_versions["WS"]',
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:54.714307Z",
			ended_at: "2024-09-17T11:30:54.719983Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "module.jetbrains_gateway.data.coder_workspace.me",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:54.714563Z",
			ended_at: "2024-09-17T11:30:54.718415Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "module.jetbrains_gateway.data.coder_parameter.jetbrains_ide",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:54.714664Z",
			ended_at: "2024-09-17T11:30:54.718406Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "data.coder_external_auth.github",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:54.714805Z",
			ended_at: "2024-09-17T11:30:54.716919Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "data.coder_workspace.me",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:54.770341Z",
			ended_at: "2024-09-17T11:30:54.773556Z",
			stage: "plan",
			source: "coder",
			action: "state refresh",
			resource: "coder_agent.dev",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:54.790322Z",
			ended_at: "2024-09-17T11:30:54.800107Z",
			stage: "plan",
			source: "coder",
			action: "state refresh",
			resource: "module.personalize.coder_script.personalize",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:54.790805Z",
			ended_at: "2024-09-17T11:30:54.798414Z",
			stage: "plan",
			source: "coder",
			action: "state refresh",
			resource: "module.git-clone.coder_script.git_clone",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:54.790949Z",
			ended_at: "2024-09-17T11:30:54.797751Z",
			stage: "plan",
			source: "coder",
			action: "state refresh",
			resource: "module.slackme.coder_script.install_slackme",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:54.791221Z",
			ended_at: "2024-09-17T11:30:54.793362Z",
			stage: "plan",
			source: "coder",
			action: "state refresh",
			resource: "module.dotfiles.coder_script.dotfiles",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:54.792818Z",
			ended_at: "2024-09-17T11:30:54.797757Z",
			stage: "plan",
			source: "coder",
			action: "state refresh",
			resource: "module.code-server.coder_script.code-server",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:54.797364Z",
			ended_at: "2024-09-17T11:30:54.799849Z",
			stage: "plan",
			source: "coder",
			action: "state refresh",
			resource: "module.code-server.coder_app.code-server",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:54.79755Z",
			ended_at: "2024-09-17T11:30:54.8023Z",
			stage: "plan",
			source: "coder",
			action: "state refresh",
			resource: "module.coder-login.coder_script.coder-login",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:54.811595Z",
			ended_at: "2024-09-17T11:30:54.815418Z",
			stage: "plan",
			source: "coder",
			action: "state refresh",
			resource: "module.filebrowser.coder_script.filebrowser",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:54.812057Z",
			ended_at: "2024-09-17T11:30:54.814969Z",
			stage: "plan",
			source: "coder",
			action: "state refresh",
			resource: "module.filebrowser.coder_app.filebrowser",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:54.987669Z",
			ended_at: "2024-09-17T11:30:54.988669Z",
			stage: "plan",
			source: "coder",
			action: "state refresh",
			resource: "module.jetbrains_gateway.coder_app.gateway",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:55.206842Z",
			ended_at: "2024-09-17T11:30:55.593171Z",
			stage: "plan",
			source: "docker",
			action: "read",
			resource: "data.docker_registry_image.dogfood",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:55.207764Z",
			ended_at: "2024-09-17T11:30:55.488281Z",
			stage: "plan",
			source: "docker",
			action: "state refresh",
			resource: "docker_volume.home_volume",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:55.59492Z",
			ended_at: "2024-09-17T11:30:56.370447Z",
			stage: "plan",
			source: "docker",
			action: "state refresh",
			resource: "docker_image.dogfood",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:56.433324Z",
			ended_at: "2024-09-17T11:30:56.976514Z",
			stage: "graph",
			source: "terraform",
			action: "building terraform dependency graph",
			resource: "state file",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:57.386136Z",
			ended_at: "2024-09-17T11:30:57.387345Z",
			stage: "apply",
			source: "coder",
			action: "delete",
			resource: "module.coder-login.coder_script.coder-login",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:57.400376Z",
			ended_at: "2024-09-17T11:30:57.402341Z",
			stage: "apply",
			source: "coder",
			action: "create",
			resource: "module.coder-login.coder_script.coder-login",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:30:57.699094Z",
			ended_at: "2024-09-17T11:31:00.097627Z",
			stage: "apply",
			source: "docker",
			action: "create",
			resource: "docker_container.workspace[0]",
		},
		{
			job_id: "438507fa-8c93-42f4-9091-d772877dbc2b",
			started_at: "2024-09-17T11:31:00.113522Z",
			ended_at: "2024-09-17T11:31:00.117077Z",
			stage: "apply",
			source: "coder",
			action: "create",
			resource: "coder_metadata.container_info[0]",
		},
	],
};