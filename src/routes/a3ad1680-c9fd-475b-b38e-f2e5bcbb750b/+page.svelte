<script>
import { Converter, setFlavor } from "showdown";
setFlavor('github')
var converter = new Converter()

/**
	 * @type {string}
	 */
let editor_text;
let place_holder_preview_text = '<p>Preview here...</p>';
let preview_text = place_holder_preview_text;

function reset_preview() {
	preview_text = place_holder_preview_text;
}
function text_preview() {
	preview_text = converter.makeHtml(editor_text);
}
</script>

<div id="editor-wrapper">
	<h3>Nuovo Post</h3>
	<form method="post">
		<div class="wrapper-e-p">
			<textarea bind:value={editor_text} name="new_post" id="new-post" required cols="100" rows="30" on:input={text_preview}></textarea>
			<div id="preview">
				<div id="trusted-html">
					{@html preview_text}
				</div>
			</div>
		</div>
		<br/>
		<button type="reset" on:click={reset_preview}>Cancella</button>
		<button type="submit" id="submit">Pubblica</button>
	</form>
</div>
<style>
	#submit	{
		margin-bottom: 2em;
		margin-left: 2em;
	}
	#editor-wrapper	{
		text-align: center;
	}
	#new-post {
		resize: none;
		width: 40vw;
		height: 80vh;
		margin-left: 3vw;
		border: 1px solid #505050;
	}
	#preview	{
		width: 40vw;
		height: 80vh;
		border: 1px solid #505050;
		padding: 2px;
		margin-top: 1px;
		margin-bottom: 1px;
		margin-left: calc(100vw - 7vw - 80vw);
	}
	.wrapper-e-p	{
		display: flex;
		align-content: center;
	}
</style>