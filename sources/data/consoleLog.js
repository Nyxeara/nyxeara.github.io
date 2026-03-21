import * as THREE from 'three/webgpu'

const text = `
███╗   ██╗██╗   ██╗██╗  ██╗███████╗ █████╗ ██████╗  █████╗
████╗  ██║╚██╗ ██╔╝╚██╗██╔╝██╔════╝██╔══██╗██╔══██╗██╔══██╗
██╔██╗ ██║ ╚████╔╝  ╚███╔╝ █████╗  ███████║██████╔╝███████║
██║╚██╗██║  ╚██╔╝   ██╔██╗ ██╔══╝  ██╔══██║██╔══██╗██╔══██║
██║ ╚████║   ██║   ██╔╝ ██╗███████╗██║  ██║██║  ██║██║  ██║
╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝

╔═ Welcome ══════════════╗
║ Hey, sneaky developer. I see you.
║ You found the console — that means you're curious.
║ I like that.
╚════════════════════════╝

╔═ Who am I ═════════════╗
║ Name       ⇒ Sofiane Lakhdari
║ Alias      ⇒ Nyxeara
║ Titles     ⇒ Researcher · Developer · Poet · Polymath · Artist
║ School     ⇒ Institut des Hautes Études en Informatique de Tlemcen
║ Languages  ⇒ Arabic · French · English · Tamazight · Japanese (learning)
╚════════════════════════╝

╔═ Socials ══════════════╗
║ Mail       ⇒ nyx.recarnated@gmail.com
║ GitHub     ⇒ https://github.com/nyxeara
║ Links      ⇒ https://link.me/nyxeara
╚════════════════════════╝

╔═ Stack ════════════════╗
║ Languages  ⇒ Python · JavaScript · HTML · CSS · DUST (my own language)
║ Frameworks ⇒ React · Three.js · Vite
║ Tools      ⇒ Termux · VS Code · Git · compilers
╚════════════════════════╝

╔═ Debug ════════════════╗
║ Add #debug to the URL and reload to access debug mode.
║ Press [V] to toggle the free camera.
╚════════════════════════╝
`
let finalText = ''
let finalStyles = []
const stylesSet = {
    letter: 'color: #ffffff; font: 400 1em monospace;',
    pipe: 'color: #D66FFF; font: 400 1em monospace;',
}
let currentStyle = null
for(let i = 0; i < text.length; i++)
{
    const char = text[i]
    const style = char.match(/[╔║═╗╚╝╔╝]/) ? 'pipe' : 'letter'
    if(style !== currentStyle)
    {
        currentStyle = style
        finalText += '%c'
        finalStyles.push(stylesSet[currentStyle])
    }
    finalText += char
}

export default [finalText, ...finalStyles]
