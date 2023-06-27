<script>
	import { onMount } from 'svelte';
	import { EditorState } from 'prosemirror-state';
	import { EditorView } from 'prosemirror-view';
	import { schema } from 'prosemirror-schema-basic';
	import { exampleSetup } from 'prosemirror-example-setup';
	
	let editorView;

	onMount(() => {
		const editorElement = document.getElementById('editor');
		const doc = schema.nodeFromJSON({ type: 'doc', content: [] });
		const state = EditorState.create({ doc, plugins: exampleSetup({ schema }) });
		editorView = new EditorView(editorElement, { state });
	});
</script>

<div id="editor-wrapper">
	<h3>Nuovo Post</h3>
	<form method="post" action="?/createNewPost">
		<div class="editor"></div>
		<button type="submit" id="submit">Pubblica</button>
	</form>
</div>

<style>
	#submit {
		margin-bottom: 2em;
		margin-left: 2em;
	}
	#editor-wrapper {
		text-align: center;
	}
</style>
