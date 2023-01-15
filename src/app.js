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
          'dist/Imagen1.png': 'img/Imagen1.jpg',
          'dist/Imagen2.png': 'img/Imagen2.jpg',
          'dist/Imagen2.png': 'img/imagen3.jpg',
          'dist/Imagen2.png': 'img/imagen4.jpg',
          'dist/Imagen2.png': 'img/imagen5.jpg',
          'dist/Imagen2.png': 'img/imagen6.jpg',
          'dist/Imagen2.png': 'img/imagen7.jpg',
          'dist/Imagen2.png': 'img/imagen8.jpg',
          'dist/Imagen2.png': 'img/imagen9.jpg',
          'dist/Imagen2.png': 'img/GRACIAS.jpg',
          'dist/Imagen2.png': 'img/integrantes.jpg',
      }
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-image');
};
  const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
            function cambiaTema(ev){
                if(ev.target.checked){
                    document.documentElement.setAttribute('tema', 'light');
                } else {
                    document.documentElement.setAttribute('tema', 'dark');
                }
            }
            colorSwitch.addEventListener('change', cambiaTema);