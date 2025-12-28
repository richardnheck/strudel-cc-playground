// Array of basic Strudel.cc snippets
const strudelSnippets = [
  {
    name: 'Kick Pattern',
    code: `$:s("bd!4").bank("RolandTR909").gain("1.5 1.2 1.5 1.2" )._punchcard()`
  },
  {
    name: 'Hihat Loop',
    code: `$:s("[hh ~]*8").bank("RolandTR909").gain(0.8)
.lpf(8000)._punchcard()`
  },
  {
    name: 'Snare drum',
    code: `$: n("[- 1]!2").s("sd").bank("RolandTR909")._punchcard()`
  },
  {
    name: 'Saw Synth',
    code: `$: note("[c2 <g2 a2 d2 e2>]!8")
.sound("sawtooth")
._scope()`
  },
  {
    name: 'Bassline',
    code: `$: n("1 2 5 4")
    .fast(2)
    .scale("G:minor")
    .s("gm_acoustic_bass")
    .transpose("-20")
    ._scope()`
  },
 
];

// Function to insert snippet into editor without reloading
function insertSnippet(code) {
  const editor = document.querySelector('strudel-editor');
  if (editor) {
    // Update the code property directly
    editor.code = code;
    // Also update the attribute
    editor.setAttribute('code', code);
    editor.focus();
  }
}

// Function to append snippet to existing code without reloading
function appendSnippet(code) {
    const editor = document.querySelector('strudel-editor');
  if (editor) {
    const currentCode = editor.getAttribute('code') || '';
    const newCode = currentCode + '\n\n' + code;
    // Update the code property directly
    editor.code = newCode;
    // Also update the attribute
    editor.setAttribute('code', newCode);
    editor.click();

  }
}
