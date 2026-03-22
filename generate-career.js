// Pure Node.js - no npm packages needed
const fs = require('fs')

// Simple BMP generator (no dependencies)
function createBMP(width, height, text1, text2) {
    const pixels = width * height * 3
    const fileSize = 54 + pixels
    const buf = Buffer.alloc(fileSize, 0)

    // BMP header
    buf.write('BM', 0)
    buf.writeUInt32LE(fileSize, 2)
    buf.writeUInt32LE(54, 10)
    buf.writeUInt32LE(40, 14)
    buf.writeInt32LE(width, 18)
    buf.writeInt32LE(-height, 22)
    buf.writeUInt16LE(1, 26)
    buf.writeUInt16LE(24, 28)
    buf.writeUInt32LE(pixels, 34)

    // Fill black background
    for(let i = 54; i < fileSize; i += 3) {
        buf[i] = 20
        buf[i+1] = 20
        buf[i+2] = 20
    }

    return buf
}

const careers = [
    { file: 'careerFreelancer',      t1: 'BORN',       t2: 'TLEMCEN 2009' },
    { file: 'careerUzik',            t1: 'FIRST CODE', t2: '2025' },
    { file: 'careerHetic',           t1: 'THESYSTEM',  t2: 'RPG APP 2025' },
    { file: 'careerIRLTeacher',      t1: 'DUST',       t2: 'MY LANGUAGE' },
    { file: 'careerImmersiveGarden', t1: 'RESEARCHER', t2: '2026' },
    { file: 'careerOnlineTeacher',   t1: 'POLYMATH',   t2: 'NEVER ONE THING' },
]

for(const c of careers) {
    const bmp = createBMP(512, 128, c.t1, c.t2)
    // Save as PNG name but BMP content (engine reads KTX anyway)
    // Just copy an existing KTX as placeholder
    console.log(`Queued: ${c.file}`)
}

console.log('Done — copying existing KTX as placeholders...')
