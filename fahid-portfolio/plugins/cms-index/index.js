const fs = require('fs');
const path = require('path');

module.exports = {
  onBuild: ({ utils }) => {
    try {
      // Auto-generate index.json for publications
      const pubDir = path.join(process.cwd(), '_publications');
      if (fs.existsSync(pubDir)) {
        const files = fs.readdirSync(pubDir)
          .filter(f => f.endsWith('.md'))
          .sort();
        fs.writeFileSync(
          path.join(pubDir, 'index.json'),
          JSON.stringify(files)
        );
        console.log(`[CMS Index] Publications: ${files.length} files indexed`);
      }

      // Auto-generate index.json for teaching
      const teachDir = path.join(process.cwd(), '_teaching');
      if (fs.existsSync(teachDir)) {
        const files = fs.readdirSync(teachDir)
          .filter(f => f.endsWith('.md'))
          .sort();
        fs.writeFileSync(
          path.join(teachDir, 'index.json'),
          JSON.stringify(files)
        );
        console.log(`[CMS Index] Teaching: ${files.length} files indexed`);
      }

      // Auto-generate index.json for events
      const eventsDir = path.join(process.cwd(), '_events');
      if (fs.existsSync(eventsDir)) {
        const files = fs.readdirSync(eventsDir)
          .filter(f => f.endsWith('.md'))
          .sort();
        fs.writeFileSync(
          path.join(eventsDir, 'index.json'),
          JSON.stringify(files)
        );
        console.log(`[CMS Index] Events: ${files.length} files indexed`);
      }

    } catch (err) {
      console.error('[CMS Index] Error generating index files:', err);
    }
  }
};
