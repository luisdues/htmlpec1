module.exports = function (grunt) {
  grunt.initConfig({
    image: {
      static: {
        options: {
          optipng: false,
          pngquant: true,
          zopflipng: true,
          jpegRecompress: false,
          mozjpeg: true,
          gifsicle: true,
          svgo: true
        },
        options: {
          optipng: ['-i 1', '-strip all', '-fix', '-o7', '-force'],
          pngquant: ['--speed=1', '--force', 256],
          zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
          jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max', 80],
          mozjpeg: ['-optimize', '-progressive'],
          gifsicle: ['--optimize'],
          svgo: ['--enable', 'cleanupIDs', '--disable', 'convertColors']
        },
        files: {
          'dist/caratula.png': 'img/caratula.png',
          'dist/Imagen1.png': 'img/Imagen1.png',
          'dist/Imagen2.png': 'img/Imagen2.png',
      }
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-image');
};
console.log('Hello world!');
function suma(a, b) {
    return a + b;
  }
  module.exports = suma;
  const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
            function cambiaTema(ev){
                if(ev.target.checked){
                    document.documentElement.setAttribute('tema', 'light');
                } else {
                    document.documentElement.setAttribute('tema', 'dark');
                }
            }
            colorSwitch.addEventListener('change', cambiaTema);