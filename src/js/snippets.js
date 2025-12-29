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
  {
    name: 'Hihats with noise',
    description: 'How to make hihats with noise',
    code: `$:sound("bd*2,<white pink brown>*8")
.decay(.04).sustain(0)._scope()`,
    tags: ['noise']
  },
  {
    name: 'Noise Synth Sound',
    description: 'Noise can be added to any sound',
    code: `$: note("c3").noise("<0.1 0.25 0.5>")._scope()`,
    tags: ['noise']
  },
  {
    name: 'Crackle Sound',
    description: 'How to make various crackle noises',
    code: `$:s("crackle*4").density("<0.01 0.04 0.2 0.5>".slow(2))._scope()`,
    tags: ['noise']
  },
  {
    name: 'Sick synth sound using phases',
    description: 'This is a seriously sick(fat) synth sound',
    code: `$:s("saw").seg(16).n(irand(12)).scale("F1:minor")
.penv(48).panchor(0).pdec(0.05)
.delay(0.25).room(0.25)
.compressor(-20).vib(0.3)
.partials(randL(200))
.phases(randL(200))`,
    tags: ['synth']
  },
  {
    name: 'Programatically generate partials',
    description: '',
    code: `const numHarmonics = 59;
$:note("c2 <eb2 <g2 g1>>".fast(2))
.sound("sawtooth")
.partials(new Array(numHarmonics).fill(1))
._scope()`,
    tags: ['synth']
  },
  {
    name: 'Triangle Smooth Effected Synth',
    description: 'A smooth triangle wave synth with effects',
    code: `$: s("triangle*4").decay(0.5).n(irand(12)).scale('C minor')
.room(1).roomsize(10)`,
    tags: []
  },
  {
    name: 'Driving Supersaw Bass',
    description: 'A cool supersaw bass sound with lowpass filter for bassiness',
    code: `$: s("supersaw").seg(16).lpf(tri.range(800, 5000)).gain(2)`,
    tags: []
  },
  {
    name: 'Smooth Spacey Synth lead',
    description: 'Supersaw synth lead sound',
    code: `$: chord("C2").voicing().s("supersaw").seg(16).lpf(tri.range(800, 5000)).gain(2)`,
    tags: []
  },
  {
    name: '',
    description: '',
    code: ``,
    tags: []
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

function appendSnippetToRepl(code) {
  console.log('Appending snippet to REPL:', code);
  document.getElementById('strudel').innerHTML = '';
  const replEditor = document.createElement('strudel-repl');
  replEditor.setAttribute(
    'code',
    `${code}`,
  );
  document.getElementById('strudel').append(replEditor);
}

