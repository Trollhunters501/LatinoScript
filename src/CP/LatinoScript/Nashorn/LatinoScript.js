    console.info("[LatinoScript] Iniciando...");
    console.info("[LatinoScript] Cargando...");
    console.info("[LatinoScript] Versión 0.1.0 alpha");
    console.info("[LatinoScript] By Creadores Program");
    console.info("[LatinoScript] Redes Sociales:");
    console.info("Discord: https://discord.gg/mrmHcwxXff");
    console.info("YouTube: https://youtube.com/c/Trollhunters501");
    console.info("Facebook: https://facebook.com/profile.php?id=100089507007036");
    console.info("[LatinoScript] Basado en JavaScript, C y Latino");
    console.info("[LatinoScript] Cargando Lenguaje...");
    function latjs(code){
      
      function incluirjs(codec){
        eval(codec);
      }
      function incluir(codec){
        latjs(codec);
      }
      let importar = function (url){
        latjs(fetch(url));
      };
      code = " " + code + " ";
      let latjsPrefix = "[LatinoScript] ";
      console.info(latjsPrefix + "Ejecutando " + code + "...");
      let mark = "{{~strng~}}";
      let matches1 = code.match(/'([^\\']|\\')*'/g);
      let matches2 = code.match(/"([^\\"]|\\")*"/g);
      let matches3 = code.match(/`([^\\`]|\\`)*`/g);
      if(matches1 != null){
        matches1.forEach(function(match){ code = code.replace(match, mark)});
      }
      if(matches2 != null){
        matches2.forEach(function(match){ code = code.replace(match, mark)});
      }
      if(matches3 != null){
        matches3.forEach(function(match){ code = code.replace(match, mark)});
      }
      
      //Funciones y variables
      function añadirError(err){
        throw err;
      }
      let poner = function(txt){
        alert(txt);
      };
      let consola = {};
      consola = console;
      consola.registrar = console.log;
      consola.depurar = console.debug;
      consola.afirmar = console.assert;
      consola.limpiar = console.clear;
      consola.advertir = console.warn;
      let imprimir = function(txt){
        alert(txt);
      };
      let escribir = imprimir;
      let escribirPregunta = function(prompt1, txt){
          prompt(prompt1, txt);
      }
      let cierto = true;
      let verdadero = true;
      let falso = false;
      let nulo = null;
      let rango = function(start, stop, step){
        step = step || 1;
        let startArray = stop  === undefined ? 0 : start;
        let stopArray = stop  === undefined ? start : stop;
        return Array.from({ length: (stopArray - startArray) / step + 1}, function(_, i){ startArray + (i * step)});
      };
      let alerta = function(txt){
        alert(txt);
      };
      let ventana = window;
      let establecerIntervalo = function(functi, time){
        setInterval(functi, time);
      };
      let establecerTiempoEspera = function(functi, time){
        setTimeout(functi, time);
      };
      
      let preguntar = function(txt){
        confirm(txt);
      };
      let confirmar = preguntar;
      let sis = {};
      sis.op = function(sistem){
          if(!navigator.userAgentData.platform){
              Object.defineProperty(navigator, "userAgentData.platform", { get: function(){ return navigator.userAgent; } });
          }
          if(!sistem){
              return navigator.userAgentData.platform.toLowerCase();
          }else{
              if(navigator.userAgentData.platform.toLowerCase().indexOf(sistem) != -1){
                return true;
              }else{
                return false;
              }
          }
      };
      sis.operativo = sis.op;
      sis.avisar = function(level){
        console.warn(latjsPrefix + "No soportado");
      };
      //String prototype
      let Cadena = {};
      Cadena.prototipo = String.prototype;
      Cadena = String;
      let Formacion = {};
      Formacion.prototipo = Array.prototype;
      Formacion = Array;
      String.prototype.reemplazarTodo = String.prototype.replaceAll;
      String.prototype.reemplazar = String.prototype.replace;
      String.prototype.longitud = function(){
          return this.length;
      };
      String.prototype.indiceDe = function(){
          return this.indexOf();
      };
      
      //Array prototype
      Array.prototype.paraCada = Array.prototype.forEach;
      
      //code remplace
        code = code.replaceAll(/\bescribe\b/gi, "write");
        code = code.replaceAll(/\bcontenidoHTML\b/gi, "innerHTML");
        code = code.replaceAll(/\bsolicitarPantallaCompleta\b/gi, "requestFullScreen");
        code = code.replaceAll(/\bestilo\b/gi, "style");
        code = code.replaceAll(/\bcancelarPantallaCompleta\b/gi, "cancelFullScreen");
        code = code.replaceAll(/\bdocumento\b/gi, "document");
        code = code.replaceAll(/\bobtenerElementoPorId\b/gi, "getElementById");
        code = code.replaceAll(/\bobtenerElementosPorNombreEtiqueta\b/gi, "getElementsByTagName");
        code = code.replaceAll(/\bobtenerElementosPorClase\b/gi, "getElementsByClassName");
        code = code.replaceAll(/\bunirse\b/gi, "join");
        code = code.replaceAll(/\bdividirCadena\b/gi, "split");
        code = code.replaceAll(/\benfocar\b/gi, "focus");
        code = code.replaceAll(/\bcrearElemento\b/gi, "createElement");
        code = code.replaceAll(/\bañadirNodo\b/gi, "appendChild");
        code = code.replaceAll(/\beliminarNodo\b/gi, "removeChild");
        code = code.replaceAll(/\bmapa\b/gi, "map");
        code = code.replaceAll(/\bfiltrar\b/gi, "filter");
        code = code.replaceAll(/\breducir\b/gi, "reduce");
        code = code.replaceAll(/\balguna\b/gi, "some");
        code = code.replaceAll(/\bincluye\b/gi, "includes");
        code = code.replaceAll(/\brebanada\b/gi, "slice");
        code = code.replaceAll(/\bempalme\b/gi, "splice");
          
        code = code.replaceAll(/\bMates\b/gi, "Math");
        code = code.replaceAll(/\bpiso\b/gi, "floor");
        code = code.replaceAll(/\baleatorio\b/gi, "random");
        code = code.replaceAll(/\balmLocal\b/gi, "localStorage");
        code = code.replaceAll(/\bobtenerObj\b/gi, "getItem");
        code = code.replaceAll(/\bestableserObj\b/gi, "setItem");
        code = code.replaceAll(/\bdetener\b/gi, "stop");
        code = code.replaceAll(/\btirarError\b/gi, "throw");
        code = code.replaceAll(/\bpara\b/gi, "for");
        code = code.replaceAll(/\brepetir\b/gi, "for");
        code = code.replaceAll(/\bdesde\b/gi, "from");
        code = code.replaceAll(/\botro\b/gi, "default");
        code = code.replaceAll(/\bdefecto\b/gi, "default");
        code = code.replaceAll(/\bimportarjs\b/gi, "import");
        code = code.replaceAll(/\bexportarjs\b/gi, "export");
        code = code.replaceAll(/\bnombre-modulo\b/gi, "module-name");
        code = code.replaceAll(/\bnombre\b/gi, "name");
        code = code.replaceAll(/\bdefecto\b/gi, "default");
        code = code.replaceAll(/\bcaso\b/gi, "case");
        code = code.replaceAll("#", "//");
        code = code.replaceAll("--", "//");
        code = code.replaceAll(/\binicio\b/gi, "{");
        code = code.replaceAll(/\bfin\b/gi, "}");
        code = code.replaceAll(/\bsino\b/gi, "}else{");
        code = code.replaceAll(/\belegir\b/gi, "switch");
        code = code.replaceAll(/\bromper\b/gi, "break");
        code = code.replaceAll(/\bhacer\b/gi, "do{");
        code = code.replaceAll(/\bmientras\b/gi, "}while");
        code = code.replaceAll(/\bfuncion\b/gi, "function");
        code = code.replaceAll(/\blocal\b/gi, "let");
        code = code.replaceAll(/\bconstante\b/gi, "const");
        code = code.replaceAll(/\bnuevo\b/gi, "new");
        code = code.replaceAll(/\bcomo\b/gi, "as");
        code = code.replaceAll(/\bcontinuar\b/gi, "continue");
        code = code.replaceAll(/\btipo\b/gi, "type");
        code = code.replaceAll(/\bglobal\b/gi, "var");
        code = code.replaceAll(/\bcuerpo\b/gi, "body");
        code = code.replaceAll(/\bencabezados\b/gi, "headers");
        code = code.replaceAll(/\bmetodo\b/gi, "method");
        code = code.replaceAll(/\bbuscarUrl\b/gi, "fetch");
        code = code.replaceAll(/\bosi\b/gi, "}else if");
        code = code.replaceAll(/\bencadenar\b/gi, "stringify");
        code = code.replaceAll(/\bclase\b/gi, "class");
        code = code.replaceAll(/\bimplementos\b/gi, "implements");
        code = code.replaceAll(/\bextiende\b/gi, "extends");
        code = code.replaceAll(/\bestatico\b/gi, "static");
        code = code.replaceAll(/\bdetectarEvento\b/gi, "addEventListener");
        code = code.replaceAll(/\basincrono\b/gi, "async");
        code = code.replaceAll(/\ben\b/gi, "in");
        code = code.replaceAll(/\bde\b/gi, "of");
        code = code.replaceAll(/\bsi\b/gi, "if");
        code = code.replaceAll(/\bretornar\b/gi, "return");
        code = code.replaceAll(/\bregresar\b/gi, "return");
        code = code.replaceAll(/\bret\b/gi, "return");
        code = code.replaceAll(/\bir\b/gi, "return");
        code = code.replaceAll(/\bfun\b/gi, "function");
        code = code.replaceAll(/\besto\b/gi, "this");
        code = code.replaceAll(/\beste\b/gi, "this");
        code = code.replaceAll(/\besperar\b/gi, "await");
        code = code.replaceAll(/\bintentar\b/gi, "try");
        code = code.replaceAll(/\batrapar\b/gi, "catch");
        code = code.replaceAll(/\bcapturar\b/gi, "catch");
        code = code.replaceAll(/\bfinalmente\b/gi, "finally");
      if(matches1 != null){
        matches1.forEach(function(match){ code = code.replace(mark, match)});
      }
      if(matches2 != null){
        matches2.forEach(function(match){ code = code.replace(mark, match)});
      }
      if(matches3 != null){
        matches3.forEach(function(match){ code = code.replace(mark, match)});
      }
      try{
        eval(code);
      }catch(error){
        console.error(latjsPrefix + "[Error] " + error);
      }
      
      String.prototype.reemplazarTodo = null;
      String.prototype.reemplazar = null;
      String.prototype.longitud = null;
      String.prototype.indiceDe = null;
      
      //End Array prototype
      Array.prototype.paraCada = null;
      
    }
    function latjsUrl(url){
      latjs(fetch(url));
    }
    console.info("[LatinoScript] Listo!");
    console.info("[LatinoScript] Usa latjs(cod); o latjsUrl(URL); para ejecutar LatinoScript!");
