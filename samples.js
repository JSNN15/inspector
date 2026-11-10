// Ejemplos de demostración: imagen, crédito y licencia de cada caso.
const SAMPLES = [
  {
    "img": "s/n0.jpg",
    "kind": "tablero",
    "credit": "Electrical Panel · peretzp · CC BY-SA 2.0",
    "link": "https://www.flickr.com/photos/68877611@N00/5397919963",
    "ms": 11094,
    "result": {
      "resumen": "El tablero eléctrico presenta un estado crítico debido a la presencia de material combustible (paja o hierba seca) dentro del gabinete, en contacto directo con conductores y equipos energizados, lo que representa un riesgo severo de incendio y falla eléctrica.",
      "estado": "critico",
      "hallazgos": [
        {
          "titulo": "Material combustible dentro del gabinete",
          "detalle": "Se observa paja o hierba seca acumulada en el interior del tablero, entre los cables y alrededor de los interruptores automáticos. Este material es altamente inflamable y puede encenderse por chispas, arcos eléctricos o sobrecalentamiento de conexiones.",
          "severidad": "alta",
          "accion": "Desenergizar el tablero, retirar todo el material extraño y limpiar el interior. Verificar que no haya daños en el aislamiento de los cables antes de reenergizar.",
          "caja": [
            110,
            400,
            890,
            930
          ]
        },
        {
          "titulo": "Cableado desordenado y sin protección",
          "detalle": "Los conductores (cables rosados, azules, verdes y otros) están enredados, sin canalización ni sujetadores adecuados, lo que dificulta la inspección, aumenta el riesgo de contacto accidental y puede dañar el aislamiento por roce o calor.",
          "severidad": "media",
          "accion": "Reorganizar el cableado, instalar canaletas o sujetadores y separar los conductores de circuitos diferentes según normativa eléctrica.",
          "caja": [
            120,
            410,
            880,
            920
          ]
        },
        {
          "titulo": "Interruptores automáticos expuestos y sin cubierta",
          "detalle": "Los tres interruptores automáticos (dos de marca LGN y uno Schneider Electric) están visibles y sin una cubierta protectora adicional, lo que expone los bornes y mecanismos a contacto accidental, polvo y humedad.",
          "severidad": "media",
          "accion": "Instalar una cubierta o puerta protectora sobre los interruptores y asegurar que el cierre del gabinete funcione correctamente.",
          "caja": [
            200,
            430,
            690,
            630
          ]
        },
        {
          "titulo": "Indicadores y medidores con posible deterioro",
          "detalle": "Los tres amperímetros/voltímetros y las luces piloto (verde, roja y amarilla) muestran signos de antigüedad y suciedad. No se puede confirmar desde la foto si están operativos o calibrados.",
          "severidad": "baja",
          "accion": "Realizar prueba de funcionamiento de los indicadores y luces piloto; reemplazar los que no respondan.",
          "caja": [
            140,
            110,
            840,
            380
          ]
        }
      ],
      "no_se_puede_evaluar": "No se puede confirmar si el tablero está energizado, si existe puesta a tierra adecuada, si los interruptores están cerrados o abiertos, ni el estado real de las conexiones internas debido al desorden del cableado y la presencia de material extraño."
    },
    "error": null
  },
  {
    "img": "s/n1.jpg",
    "kind": "tablero",
    "credit": "square-d distribution board · h080 · CC BY-SA 2.0",
    "link": "https://www.flickr.com/photos/7718908@N04/3225348374",
    "ms": 10768,
    "result": {
      "resumen": "Gabinete eléctrico con componentes quemados y acumulación de hollín, indicando falla térmica o arco eléctrico previo.",
      "estado": "critico",
      "hallazgos": [
        {
          "titulo": "Componentes quemados",
          "detalle": "Varios módulos plásticos presentan zonas carbonizadas y derretidas, lo que indica sobrecalentamiento severo o arco eléctrico.",
          "severidad": "alta",
          "accion": "Desenergizar el equipo, retirar los componentes dañados y reemplazar por repuestos originales antes de reenergizar.",
          "caja": [
            100,
            100,
            760,
            760
          ]
        },
        {
          "titulo": "Hollín en barra colectora",
          "detalle": "La barra de conexión inferior muestra manchas negras y residuos de combustión, comprometiendo el aislamiento y contacto eléctrico.",
          "severidad": "alta",
          "accion": "Limpiar la barra colectora, inspeccionar continuidad y reemplazar si hay daño estructural o pérdida de aislamiento.",
          "caja": [
            330,
            560,
            840,
            720
          ]
        },
        {
          "titulo": "Gabinete sucio y deteriorado",
          "detalle": "El interior del gabinete está cubierto de polvo y residuos de combustión, lo que puede provocar nuevos cortocircuitos.",
          "severidad": "media",
          "accion": "Realizar limpieza industrial del gabinete y verificar integridad de sellos y cubiertas antes de poner en servicio.",
          "caja": [
            0,
            100,
            1000,
            1000
          ]
        }
      ],
      "no_se_puede_evaluar": "No se puede confirmar si el equipo está desenergizado, ni evaluar el estado de los cables de alimentación y protecciones upstream."
    },
    "error": null
  },
  {
    "img": "s/n2.jpg",
    "kind": "equipo",
    "credit": "Green is the colour of... · Jens Rost · CC BY-SA 2.0",
    "link": "https://www.flickr.com/photos/56380734@N05/6038268904",
    "ms": 5065,
    "result": {
      "resumen": "La imagen muestra una unión de tubería pintada de verde con una junta metálica muy oxidada y presencia de humedad, lo que indica posible fuga o corrosión avanzada en el acoplamiento.",
      "estado": "observaciones",
      "hallazgos": [
        {
          "titulo": "Junta metálica con corrosión severa",
          "detalle": "Se observa una junta o brida metálica entre tramos de tubería con una capa gruesa de óxido marrón y superficie húmeda, lo que sugiere pérdida de integridad del sellado y posible fuga de fluido.",
          "severidad": "alta",
          "accion": "Aislar la sección, inspeccionar espesor de la junta, reemplazar la junta y aplicar protección anticorrosiva; verificar si hay goteo activo.",
          "caja": [
            35,
            250,
            950,
            680
          ]
        },
        {
          "titulo": "Pintura deteriorada y humedad en tubería",
          "detalle": "La pintura verde de la tubería presenta descascaramiento, manchas oscuras y zonas húmedas debajo de la junta, compatibles con filtración prolongada.",
          "severidad": "media",
          "accion": "Limpiar la zona, lijar óxido superficial, repintar con sistema anticorrosivo y monitorear reaparición de humedad.",
          "caja": [
            90,
            600,
            950,
            1000
          ]
        },
        {
          "titulo": "Sello superior con residuos y posible filtración",
          "detalle": "En la parte superior de la unión hay acumulación de material oscuro y humedad en el borde de la pintura, lo que podría indicar filtración desde el tramo superior o sellado deficiente.",
          "severidad": "baja",
          "accion": "Revisar el sello superior, limpiar residuos y sellar si corresponde; incluir en programa de inspección visual periódica.",
          "caja": [
            140,
            80,
            880,
            330
          ]
        }
      ],
      "no_se_puede_evaluar": "No se puede confirmar el tipo de fluido que transporta la tubería, la presión de operación, si la fuga es activa en el momento de la foto ni el espesor remanente del metal sin mediciones adicionales."
    },
    "error": null
  },
  {
    "img": "s/n3.jpg",
    "kind": "correa",
    "credit": "BeltCrack (Huang y otros, 2026) · CC BY-SA 4.0",
    "link": "https://doi.org/10.57760/sciencedb.31181",
    "ms": 4565,
    "result": {
      "resumen": "La imagen muestra una sección de correa transportadora con tambores y estructura metálica en interior industrial; se observan signos de desgaste y posible falta de protección en puntos de contacto, pero no hay evidencia de falla inminente.",
      "estado": "observaciones",
      "hallazgos": [
        {
          "titulo": "Desgaste en tambor de correa",
          "detalle": "El tambor central presenta superficie oxidada y desgastada, lo que puede reducir el agarre y generar deslizamiento de la correa.",
          "severidad": "media",
          "accion": "Inspeccionar espesor de revestimiento del tambor y programar recubrimiento o reemplazo según desgaste.",
          "caja": [
            560,
            480,
            770,
            640
          ]
        },
        {
          "titulo": "Estructura de soporte con corrosión",
          "detalle": "Los soportes metálicos pintados de rojo muestran descascaramiento y posible corrosión superficial, lo que afecta la rigidez del bastidor a mediano plazo.",
          "severidad": "media",
          "accion": "Lijar, aplicar inhibidor de corrosión y repintar los soportes afectados.",
          "caja": [
            430,
            500,
            820,
            720
          ]
        },
        {
          "titulo": "Cubierta de correa con posible daño superficial",
          "detalle": "La correa en la zona superior muestra marcas y desgaste irregular en la cubierta, aunque no se aprecia rotura ni deshilachado crítico.",
          "severidad": "baja",
          "accion": "Monitorear en rondas de inspección y registrar avance del desgaste.",
          "caja": [
            0,
            0,
            1000,
            500
          ]
        },
        {
          "titulo": "Falta de protección en punto de contacto",
          "detalle": "No se observa protección física ni señalización en el punto de contacto entre correa y tambor, aumentando riesgo de atrapamiento.",
          "severidad": "alta",
          "accion": "Instalar protección física y señalización de peligro según normativa de seguridad.",
          "caja": [
            750,
            250,
            1000,
            600
          ]
        }
      ],
      "no_se_puede_evaluar": "No se puede confirmar alineación precisa de la correa, tensión operativa, estado de rodamientos internos ni velocidad de operación, ya que requieren medición o funcionamiento del equipo."
    },
    "error": null
  },
  {
    "img": "s/n4.jpg",
    "kind": "tablero",
    "credit": "Electric panel · sparr0 · CC BY-SA 2.0",
    "link": "https://www.flickr.com/photos/22611472@N02/5999514090",
    "ms": 7451,
    "result": {
      "resumen": "Gabinete eléctrico industrial abierto con componentes visibles, cableado expuesto y señales de uso; presenta riesgos de contacto y falta de protección adecuada.",
      "estado": "observaciones",
      "hallazgos": [
        {
          "titulo": "Cableado expuesto y sin canalización",
          "detalle": "Se observan múltiples cables sueltos y conexiones abiertas al interior del gabinete, lo que aumenta el riesgo de contacto accidental, cortocircuitos y daños mecánicos.",
          "severidad": "alta",
          "accion": "Instalar canaletas, ductos o conductos y asegurar todos los conductores con abrazaderas; revisar y rehacer conexiones según esquema eléctrico.",
          "caja": [
            180,
            220,
            800,
            880
          ]
        },
        {
          "titulo": "Gabinete sin puerta ni cubierta protectora",
          "detalle": "El frente del tablero está abierto, dejando expuestos componentes energizados a polvo, humedad y contacto directo de personas.",
          "severidad": "alta",
          "accion": "Reinstalar la puerta o cubierta del gabinete con cierre y señalización de peligro eléctrico antes de energizar.",
          "caja": [
            100,
            90,
            860,
            990
          ]
        },
        {
          "titulo": "Componentes con posible sobrecalentamiento o corrosión",
          "detalle": "Se ven bornes y contactores con coloración oscura y posibles señales de calor o humedad; no se puede confirmar sin medición.",
          "severidad": "media",
          "accion": "Realizar inspección termográfica y medir aislamiento y continuidad; reemplazar componentes dañados.",
          "caja": [
            300,
            510,
            600,
            820
          ]
        },
        {
          "titulo": "Falta de identificación y señalización",
          "detalle": "No se observan etiquetas claras de circuitos, voltajes ni advertencias de riesgo eléctrico en el interior del gabinete.",
          "severidad": "media",
          "accion": "Colocar etiquetas duraderas con identificación de circuitos y señalización de peligro eléctrico visible.",
          "caja": [
            200,
            200,
            750,
            850
          ]
        },
        {
          "titulo": "Entorno con materiales combustibles y desorden",
          "detalle": "Existen plásticos negros y cartón cerca del gabinete, lo que representa riesgo de incendio en caso de chispa o falla eléctrica.",
          "severidad": "baja",
          "accion": "Retirar materiales combustibles del área y mantener un espacio libre alrededor del equipo eléctrico.",
          "caja": [
            0,
            0,
            450,
            740
          ]
        }
      ],
      "no_se_puede_evaluar": "No se puede confirmar si el gabinete está desenergizado, si existe protección diferencial o térmica-magnética adecuada, ni el estado del aislamiento sin pruebas eléctricas y documentación del equipo."
    }
  },
  {
    "img": "s/n5.jpg",
    "kind": "tablero",
    "credit": "Open room distribution board · seeweb · CC BY-SA 2.0",
    "link": "https://www.flickr.com/photos/65475777@N06/6934400882",
    "ms": 21262,
    "result": {
      "resumen": "Gabinete eléctrico industrial con barra de cobre y módulos de control; se observa cableado expuesto y falta de identificación clara en bornes, lo que requiere revisión de seguridad.",
      "estado": "observaciones",
      "hallazgos": [
        {
          "titulo": "Cableado expuesto sobre barra de cobre",
          "detalle": "Cables negros y azules conectados directamente a la barra de cobre sin protección visible ni canalización, con riesgo de contacto accidental o cortocircuito.",
          "severidad": "alta",
          "accion": "Instalar cubiertas o protectores sobre la barra y organizar el cableado con canaletas o bridas.",
          "caja": [
            630,
            180,
            930,
            930
          ]
        },
        {
          "titulo": "Falta de identificación en bornes inferiores",
          "detalle": "Los bornes de los módulos inferiores no tienen etiquetas legibles, lo que dificulta la operación y el mantenimiento seguro.",
          "severidad": "media",
          "accion": "Etiquetar cada borne según el esquema eléctrico correspondiente.",
          "caja": [
            40,
            560,
            560,
            990
          ]
        },
        {
          "titulo": "Módulos de control con cubiertas abiertas",
          "detalle": "Se observan módulos con componentes internos visibles y sin tapa protectora completa, exponiendo partes activas.",
          "severidad": "media",
          "accion": "Reinstalar las cubiertas protectoras de los módulos y verificar cierre hermético.",
          "caja": [
            160,
            350,
            550,
            520
          ]
        },
        {
          "titulo": "Señales de advertencia visibles",
          "detalle": "Hay triángulos amarillos de advertencia en el interior del gabinete, indicando riesgo eléctrico, pero sin contexto adicional visible.",
          "severidad": "baja",
          "accion": "Mantener señalización visible y complementar con instrucciones de seguridad específicas del equipo.",
          "caja": [
            100,
            380,
            150,
            500
          ]
        }
      ],
      "no_se_puede_evaluar": "No se puede confirmar si el gabinete está energizado, si existe puesta a tierra adecuada, ni si los equipos están en servicio o en prueba."
    }
  },
  {
    "img": "s/n6.jpg",
    "kind": "tablero",
    "credit": "Old Fuse Box · chrstphre · CC BY 2.0",
    "link": "https://www.flickr.com/photos/12457246@N03/32673756057",
    "ms": 4367,
    "result": {
      "resumen": "Gabinete eléctrico abierto y sucio, con conexiones expuestas, cables dañados y posible sobrecalentamiento; representa un riesgo eléctrico serio.",
      "estado": "critico",
      "hallazgos": [
        {
          "titulo": "Conexiones eléctricas expuestas y sucias",
          "detalle": "Se ven bornes, terminales y conductores desnudos dentro del gabinete, con polvo y residuos que pueden causar cortocircuitos o arcos eléctricos.",
          "severidad": "alta",
          "accion": "Desenergizar, limpiar, revisar apriete de conexiones y cerrar el gabinete con su tapa correspondiente.",
          "caja": [
            420,
            380,
            840,
            790
          ]
        },
        {
          "titulo": "Cable con aislamiento dañado y conductor expuesto",
          "detalle": "En la parte superior izquierda se observa un cable con el aislamiento quemado o pelado y el cobre al descubierto, lo que genera riesgo de contacto accidental y falla a tierra.",
          "severidad": "alta",
          "accion": "Reemplazar el cable dañado y proteger los extremos con terminales adecuados antes de reenergizar.",
          "caja": [
            270,
            120,
            460,
            230
          ]
        },
        {
          "titulo": "Cables negros con posible deterioro por calor",
          "detalle": "Varios conductores negros están agrupados y muestran zonas oscurecidas o quebradizas, lo que sugiere sobrecalentamiento previo o envejecimiento del aislamiento.",
          "severidad": "media",
          "accion": "Inspeccionar continuidad y aislamiento de todos los cables; reemplazar los que presenten grietas, decoloración o rigidez anormal.",
          "caja": [
            30,
            260,
            640,
            710
          ]
        },
        {
          "titulo": "Gabinete sin tapa y ubicado en piso",
          "detalle": "El tablero está abierto, apoyado sobre el piso y sin protección mecánica, lo que facilita el ingreso de polvo, humedad y contacto accidental con partes activas.",
          "severidad": "media",
          "accion": "Reinstalar el gabinete en su posición fija, montar la tapa y asegurar que quede cerrado y con señalización de peligro eléctrico.",
          "caja": [
            180,
            80,
            940,
            920
          ]
        }
      ],
      "no_se_puede_evaluar": "No se puede confirmar si el equipo está desenergizado, la tensión de operación, si existe protección diferencial o térmica-magnética asociada, ni si hay certificación de instalación eléctrica vigente."
    }
  },
  {
    "img": "s/n7.jpg",
    "kind": "tablero",
    "credit": "DSC00360 · dcmorton · CC BY 2.0",
    "link": "https://www.flickr.com/photos/94109320@N00/2446446769",
    "ms": 6755,
    "result": {
      "resumen": "Gabinete eléctrico con equipos de red y cableado denso, con protección plástica deficiente y cableado expuesto que requiere orden y revisión de seguridad.",
      "estado": "observaciones",
      "hallazgos": [
        {
          "titulo": "Cableado desordenado y expuesto",
          "detalle": "Se observan múltiples cables de colores (naranja, verde, azul, amarillo) agrupados sin canalización adecuada, colgando y cruzando sobre equipos, lo que aumenta riesgo de daño mecánico y dificulta mantenimiento.",
          "severidad": "alta",
          "accion": "Reordenar cableado, instalar canaletas o bandejas, sujetar con bridas y separar circuitos de energía y datos.",
          "caja": [
            250,
            300,
            800,
            950
          ]
        },
        {
          "titulo": "Protección plástica inadecuada sobre equipos",
          "detalle": "Una bolsa plástica cubre parcialmente la parte superior del gabinete y equipos, lo que puede acumular calor, humedad y no brinda protección adecuada contra polvo ni contacto accidental.",
          "severidad": "alta",
          "accion": "Retirar la bolsa plástica e instalar tapa o cubierta rígida adecuada para el gabinete eléctrico.",
          "caja": [
            180,
            0,
            940,
            920
          ]
        },
        {
          "titulo": "Falta de identificación y etiquetado visible",
          "detalle": "No se observan etiquetas claras en equipos ni en los cables que permitan identificar circuitos, lo que dificulta maniobras seguras y diagnóstico de fallas.",
          "severidad": "media",
          "accion": "Etiquetar equipos, puertos y cables según normativa interna y mantener diagrama actualizado.",
          "caja": [
            300,
            400,
            710,
            650
          ]
        },
        {
          "titulo": "Equipos instalados sobre superficie no estandarizada",
          "detalle": "Los dispositivos de red están apoyados sobre una repisa o superficie improvisada dentro del gabinete, sin rack ni fijación segura, con riesgo de caída o vibración.",
          "severidad": "media",
          "accion": "Instalar rack o bastidor metálico adecuado y fijar los equipos con tornillos o soportes.",
          "caja": [
            280,
            370,
            780,
            680
          ]
        },
        {
          "titulo": "Conexiones y bornes visibles sin protección",
          "detalle": "En el panel izquierdo se observan bornes y conexiones con cables sueltos, algunos sin cubrir, expuestos a contacto accidental o cortocircuito.",
          "severidad": "media",
          "accion": "Instalar cubiertas o protectores sobre bornes y verificar apriete de conexiones.",
          "caja": [
            0,
            40,
            280,
            340
          ]
        },
        {
          "titulo": "Posible sobrecalentamiento por falta de ventilación",
          "detalle": "El plástico que cubre la parte superior y el cableado denso pueden impedir la disipación de calor de los equipos activos.",
          "severidad": "baja",
          "accion": "Verificar temperatura de operación y asegurar ventilación adecuada del gabinete.",
          "caja": [
            330,
            60,
            720,
            340
          ]
        }
      ],
      "no_se_puede_evaluar": "No se puede confirmar si el gabinete está energizado, si existe puesta a tierra adecuada, ni si los equipos están encendidos y funcionando, ya que no hay indicadores visibles ni mediciones en la foto."
    }
  },
  {
    "img": "s/n8.jpg",
    "kind": "equipo",
    "credit": "Rusty Valve · mikecogh · CC BY-SA 2.0",
    "link": "https://www.flickr.com/photos/89165847@N00/22737710101",
    "ms": 4891,
    "result": {
      "resumen": "La imagen muestra una válvula de gran diámetro sobre una cañería de transporte, con corrosión avanzada en la válvula y manchas de óxido en el tubo. El estado general requiere observaciones y mantenimiento preventivo.",
      "estado": "observaciones",
      "hallazgos": [
        {
          "titulo": "Corrosión severa en válvula",
          "detalle": "La válvula y sus accesorios presentan óxido extenso y posible pérdida de espesor, lo que compromete la estanqueidad y la integridad estructural.",
          "severidad": "alta",
          "accion": "Inspeccionar espesor de pared, limpiar, aplicar protección anticorrosiva y evaluar reemplazo de la válvula si hay pérdida de material.",
          "caja": [
            70,
            60,
            310,
            770
          ]
        },
        {
          "titulo": "Óxido en superficie de cañería",
          "detalle": "Se observan manchas y rayas de óxido sobre el revestimiento blanco del tubo, indicando deterioro del recargo y posible corrosión bajo el revestimiento.",
          "severidad": "media",
          "accion": "Limpiar zonas afectadas, reparar recargo y establecer programa de inspección visual periódica.",
          "caja": [
            250,
            350,
            930,
            1000
          ]
        },
        {
          "titulo": "Soporte de válvula con óxido",
          "detalle": "El soporte o brida inferior de la válvula muestra corrosión en la base metálica, lo que puede afectar la fijación y alineación del equipo.",
          "severidad": "media",
          "accion": "Reforzar o reemplazar el soporte, aplicar tratamiento anticorrosivo y verificar torque de pernos.",
          "caja": [
            140,
            740,
            260,
            910
          ]
        },
        {
          "titulo": "Acumulación de telarañas y residuos",
          "detalle": "Hay telarañas y material orgánico en la válvula, lo que puede ocultar grietas o fugas y dificulta la inspección visual.",
          "severidad": "baja",
          "accion": "Limpiar el equipo y el área circundante para facilitar inspecciones futuras.",
          "caja": [
            80,
            300,
            300,
            760
          ]
        }
      ],
      "no_se_puede_evaluar": "No se puede confirmar el tipo de fluido transportado, la presión de operación, espesor real de pared ni si existen fugas activas sin medición adicional."
    }
  },
  {
    "img": "s/n9.jpg",
    "kind": "general",
    "credit": "09. Water Pumped out of Tracks · MTAPhotos · CC BY 2.0",
    "link": "https://www.flickr.com/photos/61135621@N03/8149552278",
    "ms": 6319,
    "result": {
      "resumen": "La instalación muestra un túnel o galería industrial con agua estancada que cubre el nivel del piso, lo que indica posible falla de drenaje o inundación parcial. El estado general requiere atención por riesgo eléctrico y de acceso.",
      "estado": "observaciones",
      "hallazgos": [
        {
          "titulo": "Agua estancada en el piso",
          "detalle": "Se observa lámina de agua turbia cubriendo el suelo de la galería, con reflejos de luces y una botella plástica flotando. Puede indicar falla de bombeo, drenaje obstruido o infiltración, generando riesgo de resbalón, daño a equipos y contacto con electricidad.",
          "severidad": "alta",
          "accion": "Bombeo inmediato del agua, inspección de sistema de drenaje y bombeo, y aislamiento de equipos eléctricos en zona húmeda.",
          "caja": [
            0,
            420,
            1000,
            1000
          ]
        },
        {
          "titulo": "Caja de conexiones y equipo eléctrico expuesto",
          "detalle": "Existen cajas de conexiones, un dispositivo rojo tipo pulsador o alarma y una lámpara amarilla montados sobre la pared, cerca de la línea de agua. Si el nivel sube, hay riesgo de cortocircuito o electrocución.",
          "severidad": "alta",
          "accion": "Evaluar nivel de protección IP de los equipos, elevar o proteger cajas eléctricas, y desconectar energía en zona afectada hasta secar y revisar aislamiento.",
          "caja": [
            440,
            200,
            600,
            600
          ]
        },
        {
          "titulo": "Extintor en zona húmeda",
          "detalle": "Un extintor cilíndrico amarillo está apoyado contra la pared junto al agua. La humedad puede corroer el cuerpo y válvula, comprometiendo su funcionamiento en emergencia.",
          "severidad": "media",
          "accion": "Reubicar extintor a zona seca y señalizada, verificar carga y sello, y realizar inspección visual de corrosión.",
          "caja": [
            620,
            380,
            680,
            570
          ]
        },
        {
          "titulo": "Señalización de franja roja y blanca deteriorada",
          "detalle": "La franja de advertencia en la pared presenta suciedad, desgaste y humedad, reduciendo su visibilidad como delimitador de zona o nivel de referencia.",
          "severidad": "baja",
          "accion": "Limpiar o reemplazar franja reflectiva y asegurar que cumpla normativa de señalización de seguridad.",
          "caja": [
            0,
            330,
            1000,
            630
          ]
        },
        {
          "titulo": "Escala de profundidad A4",
          "detalle": "Se ve una regla vertical marcada A4 con valores 8, 4, 9, +, 5, 0, posiblemente referencia de nivel o cota. Está sucia y parcialmente cubierta por humedad, lo que dificulta su lectura.",
          "severidad": "baja",
          "accion": "Limpiar escala y verificar su vigencia como referencia de nivel de agua o obra civil.",
          "caja": [
            140,
            10,
            200,
            420
          ]
        },
        {
          "titulo": "Iluminación y cableado en techo",
          "detalle": "Se observan luminarias y canalizaciones en el techo con cables expuestos y conexiones visibles. En ambiente húmedo, esto representa riesgo de contacto accidental o falla por condensación.",
          "severidad": "media",
          "accion": "Revisar aislamiento de cables, proteger conexiones y confirmar que luminarias sean a prueba de humedad.",
          "caja": [
            580,
            0,
            1000,
            180
          ]
        }
      ],
      "no_se_puede_evaluar": "No se puede confirmar la causa exacta del agua (infiltración, falla de bomba o lluvia), ni el estado operativo de los equipos eléctricos sin pruebas de aislamiento y medición de tensión. Tampoco se puede determinar la profundidad exacta del agua ni si hay gases o falta de oxígeno sin medición atmosférica."
    }
  },
  {
    "img": "s/n10.jpg",
    "kind": "tablero",
    "credit": "6120 old fuse box · crabchick · CC BY 2.0",
    "link": "https://www.flickr.com/photos/62327186@N00/6224665690",
    "ms": 5598,
    "result": {
      "resumen": "Gabinete eléctrico antiguo montado sobre ladrillo con interruptores visibles y cajas abiertas; presenta deterioro general, suciedad y falta de protección adecuada.",
      "estado": "observaciones",
      "hallazgos": [
        {
          "titulo": "Cajas de interruptores abiertas y sin tapa",
          "detalle": "Se observan al menos cuatro cajas metálicas con interruptores blancos expuestos, sin puertas ni cubiertas que protejan los contactos y terminales. Esto aumenta el riesgo de contacto accidental, ingreso de polvo y humedad, y cortocircuitos.",
          "severidad": "alta",
          "accion": "Instalar tapas o puertas de cierre en todas las cajas y verificar que los interruptores cuenten con protección adecuada contra contacto directo.",
          "caja": [
            120,
            210,
            880,
            700
          ]
        },
        {
          "titulo": "Deterioro y corrosión de cajas metálicas",
          "detalle": "Las cajas metálicas presentan óxido, suciedad acumulada y desgaste superficial, lo que puede comprometer su integridad mecánica y su función de contención.",
          "severidad": "media",
          "accion": "Limpiar, tratar superficies oxidadas y reemplazar cajas que presenten corrosión estructural o perforaciones.",
          "caja": [
            120,
            210,
            880,
            700
          ]
        },
        {
          "titulo": "Tubería y conexión superior expuesta",
          "detalle": "En la parte superior se observa una tubería metálica con conexión sujeta por una cinta o abrazadera, sin protección evidente contra impactos ni sellado claro en su entrada al gabinete.",
          "severidad": "media",
          "accion": "Reforzar la sujeción de la tubería, instalar sello o prensaestopas adecuado y proteger la conexión contra golpes y entrada de cuerpos extraños.",
          "caja": [
            450,
            0,
            700,
            230
          ]
        },
        {
          "titulo": "Soporte y base de madera en mal estado",
          "detalle": "El tablero está montado sobre estructuras de madera que muestran desgaste, humedad y posible deterioro por el tiempo, lo que puede afectar la estabilidad del gabinete.",
          "severidad": "baja",
          "accion": "Inspeccionar la estructura de madera, reemplazar piezas dañadas y considerar fijar el gabinete sobre soporte metálico o material no combustible.",
          "caja": [
            20,
            220,
            990,
            720
          ]
        }
      ],
      "no_se_puede_evaluar": "No se puede confirmar si los interruptores están energizados, si existe protección diferencial o térmica adecuada, ni el estado de los cableados internos y conexiones dentro de las cajas."
    }
  },
  {
    "img": "s/n11.jpg",
    "kind": "general",
    "credit": "Chambre bien remplie · Point d'Appui National ANT · CC BY 2.0",
    "link": "https://www.flickr.com/photos/11370436@N04/2007644690",
    "ms": 4226,
    "result": {
      "resumen": "Se observa una cámara de cableado abierta y parcialmente protegida con una estructura metálica improvisada, con cables expuestos y acumulación de hojas en el interior.",
      "estado": "observaciones",
      "hallazgos": [
        {
          "titulo": "Cámara de cables abierta sin tapa",
          "detalle": "Se ve una caja de registro abierta con cables eléctricos y de comunicación expuestos al interior, lo que permite ingreso de agua, suciedad y contacto accidental.",
          "severidad": "alta",
          "accion": "Instalar tapa o cubierta adecuada y asegurar el cierre de la cámara para evitar riesgos eléctricos y daños a los cables.",
          "caja": [
            240,
            150,
            800,
            860
          ]
        },
        {
          "titulo": "Protección perimetral improvisada y deteriorada",
          "detalle": "La estructura metálica pintada de rojo y blanco que rodea la abertura está suelta, con pintura descascarada y fijaciones visibles, lo que reduce su efectividad como barrera de seguridad.",
          "severidad": "media",
          "accion": "Reforzar o reemplazar la estructura de protección y fijarla correctamente al pavimento para evitar caídas o desplazamiento.",
          "caja": [
            50,
            0,
            1000,
            700
          ]
        },
        {
          "titulo": "Acumulación de hojas y residuos en la cámara",
          "detalle": "Hay hojas secas y tierra dentro de la caja de cables, lo que puede obstruir drenajes, retener humedad y dañar los conductores con el tiempo.",
          "severidad": "baja",
          "accion": "Limpiar el interior de la cámara y retirar los residuos orgánicos antes de cerrar la instalación.",
          "caja": [
            260,
            350,
            680,
            840
          ]
        }
      ],
      "no_se_puede_evaluar": "No se puede confirmar el estado de aislamiento de los cables, si la instalación está energizada, ni si cumple con normativa eléctrica específica, ya que no hay etiquetas visibles ni se puede inspeccionar el interior en detalle."
    }
  },
  {
    "img": "s/n12.jpg",
    "kind": "equipo",
    "credit": "Outdoor Gas Installation · christian.senger · CC BY-SA 2.0",
    "link": "https://www.flickr.com/photos/30928442@N08/3771689308",
    "ms": 4411,
    "result": {
      "resumen": "Se observan dos medidores de gas montados en pared con cañería roja y válvulas de cierre; el estado general es funcional con deterioro superficial y falta de protección en las conexiones.",
      "estado": "observaciones",
      "hallazgos": [
        {
          "titulo": "Deterioro de pintura y corrosión en cañería y válvulas",
          "detalle": "Las tuberías rojas y las válvulas presentan descascaramiento de pintura y posible oxidación superficial, lo que puede acelerar el deterioro del equipo.",
          "severidad": "media",
          "accion": "Lijar, aplicar inhibidor de corrosión y repintar con pintura industrial adecuada para servicio de gas.",
          "caja": [
            0,
            0,
            1000,
            1000
          ]
        },
        {
          "titulo": "Sellado deficiente en penetraciones de pared",
          "detalle": "Los orificios donde las tuberías ingresan a la pared muestran relleno irregular y grietas, sin sello hermético visible, lo que puede permitir ingreso de humedad o gases.",
          "severidad": "media",
          "acccion": "Sellar las penetraciones con material ignífugo y resistente a gas, y restaurar el revestimiento de la pared.",
          "caja": [
            250,
            290,
            900,
            700
          ]
        },
        {
          "titulo": "Etiquetado y marcaciones en medidores",
          "detalle": "Ambos medidores tienen etiquetas con números de teléfono y escritura a mano (por ejemplo, \"101\" y \"102\"); no se puede confirmar si están actualizadas o son oficiales.",
          "severidad": "baja",
          "accion": "Verificar vigencia de etiquetas de servicio y estandarizar identificación de equipos según procedimiento de planta.",
          "caja": [
            260,
            350,
            880,
            650
          ]
        },
        {
          "titulo": "Falta de protección física en válvulas de cierre",
          "detalle": "Las válvulas amarillas de cierre están expuestas sin protección contra golpes o operación accidental.",
          "severidad": "baja",
          "accion": "Instalar protectores o carcasas para válvulas de cierre manual.",
          "caja": [
            290,
            170,
            740,
            270
          ]
        }
      ],
      "no_se_puede_evaluar": "No se puede confirmar la presión de servicio, fecha de última inspección, certificación de los medidores ni si existen fugas en las conexiones roscadas."
    }
  },
  {
    "img": "s/n13.jpg",
    "kind": "tablero",
    "credit": "Old fuse box · Valerie Everett · CC BY-SA 2.0",
    "link": "https://www.flickr.com/photos/66742614@N00/6811481882",
    "ms": 13835,
    "result": {
      "resumen": "Gabinete eléctrico metálico con corrosión generalizada y pintura deteriorada, instalado en pared de piedra; se observa candado de seguridad en el cierre.",
      "estado": "observaciones",
      "hallazgos": [
        {
          "titulo": "Corrosión avanzada en gabinete y cierre",
          "detalle": "Se observa óxido abundante en el marco, la puerta, el pestillo y los tornillos de fijación, lo que puede comprometer la integridad mecánica y el grado de protección del equipo eléctrico.",
          "severidad": "alta",
          "accion": "Limpiar óxido, aplicar tratamiento anticorrosivo y repintar; evaluar espesor del metal y reemplazar si hay perforaciones o debilitamiento estructural.",
          "caja": [
            0,
            80,
            830,
            1000
          ]
        },
        {
          "titulo": "Pintura deteriorada y descascarada",
          "detalle": "La capa blanca de pintura está agrietada y con manchas de óxido sobre la puerta y el marco, indicando exposición a humedad y falta de mantenimiento preventivo.",
          "severidad": "media",
          "accion": "Preparar superficie, aplicar imprimación anticorrosiva y esmalte industrial adecuado al ambiente minero.",
          "caja": [
            20,
            200,
            660,
            810
          ]
        },
        {
          "titulo": "Candado de seguridad en cierre",
          "detalle": "El pestillo cuenta con un candado colocado, lo que indica control de acceso, pero no permite verificar si está cerrado correctamente ni si el sello hermético está intacto.",
          "severidad": "baja",
          "accion": "Verificar funcionamiento del cierre, estado del candado y sello de la puerta; registrar en programa de bloqueo/etiquetado si aplica.",
          "caja": [
            190,
            400,
            830,
            560
          ]
        }
      ],
      "no_se_puede_evaluar": "No se pueden verificar los componentes eléctricos internos, conexiones, protección contra sobrecorriente, puesta a tierra, grado de protección IP ni etiquetado de tensión, ya que la puerta está cerrada."
    }
  },
  {
    "img": "s/n14.jpg",
    "kind": "general",
    "credit": "Old Columbus Road Lift Bridge Span · lungstruck · CC BY 2.0",
    "link": "https://www.flickr.com/photos/52195472@N00/10893105294",
    "ms": 5553,
    "result": {
      "resumen": "Estructura metálica industrial elevada con avanzado estado de corrosión y deterioro superficial; se observa oxidación generalizada en vigas, celosía y cabina, con posible compromiso de integridad estructural.",
      "estado": "observaciones",
      "hallazgos": [
        {
          "titulo": "Corrosión avanzada en estructura metálica",
          "detalle": "Vigas, celosía y cabina presentan oxidación superficial extensa y descascaramiento de pintura, lo que puede reducir la capacidad de carga y vida útil de la estructura.",
          "severidad": "alta",
          "accion": "Realizar inspección estructural con medición de espesores (ultrasonido) y evaluar reemplazo o refuerzo de elementos críticos.",
          "caja": [
            0,
            150,
            1000,
            1000
          ]
        },
        {
          "titulo": "Estado de cabina y cerramientos",
          "detalle": "La cabina superior muestra óxido en paneles y marcos de ventanas; algunos vidrios parecen intactos pero con suciedad y posible sellado deteriorado.",
          "severidad": "media",
          "accion": "Limpiar, sellar y pintar la cabina; revisar estanqueidad y reemplazar vidrios dañados si los hay.",
          "caja": [
            210,
            150,
            800,
            560
          ]
        },
        {
          "titulo": "Elementos de acceso y protección",
          "detalle": "Se observan pasarelas y barandas metálicas con oxidación; no es posible confirmar si cumplen normativa de altura o resistencia.",
          "severidad": "media",
          "accion": "Inspeccionar barandas y escaleras, verificar cumplimiento de normativa de seguridad y reparar o reemplazar tramos deteriorados.",
          "caja": [
            0,
            340,
            1000,
            1000
          ]
        },
        {
          "titulo": "Instalaciones eléctricas y antena",
          "detalle": "Existe una estructura tipo antena o rayo sobre la cabina y cables que cruzan la estructura; su estado y conexión no se pueden verificar desde esta imagen.",
          "severidad": "baja",
          "accion": "Revisar conexión a tierra, estado de cables y protección contra rayos por personal eléctrico autorizado.",
          "caja": [
            460,
            70,
            520,
            190
          ]
        }
      ],
      "no_se_puede_evaluar": "No se pueden confirmar cargas operativas, espesores reales de acero, estado de cimentaciones, ni si la instalación está en funcionamiento o abandonada."
    }
  },
  {
    "img": "s/n15.jpg",
    "kind": "equipo",
    "credit": "Old Rusty Valve · Gordon M Robertson · CC BY 2.0",
    "link": "https://www.flickr.com/photos/8834193@N07/5792932081",
    "ms": 4243,
    "result": {
      "resumen": "Válvula industrial con corrosión severa y pintura deteriorada; requiere inspección de integridad antes de operar.",
      "estado": "observaciones",
      "hallazgos": [
        {
          "titulo": "Corrosión en válvula y actuador",
          "detalle": "Cuerpo de válvula, bridas y varilla de operación presentan óxido y descascaramiento de pintura, lo que puede indicar pérdida de espesor y riesgo de fuga.",
          "severidad": "alta",
          "accion": "Limpiar, medir espesor de pared y evaluar reemplazo o reparación de la válvula.",
          "caja": [
            50,
            60,
            1000,
            950
          ]
        },
        {
          "titulo": "Pintura y recubrimiento deteriorados",
          "detalle": "La capa protectora está descascarada en gran parte del equipo, exponiendo el metal al ambiente y acelerando la corrosión.",
          "severidad": "media",
          "accion": "Preparar superficie y aplicar sistema de pintura anticorrosiva apto para servicio industrial.",
          "caja": [
            50,
            60,
            1000,
            950
          ]
        },
        {
          "titulo": "Conexión de tubería lateral",
          "detalle": "Se observa tubería con cinta de colores y posible sellado improvisado en el extremo izquierdo; no se confirma si es temporal o defectuosa.",
          "severidad": "media",
          "accion": "Verificar tipo de conexión, estado de sellado y reemplazar si es conexión temporal o no apta.",
          "caja": [
            50,
            220,
            410,
            460
          ]
        }
      ],
      "no_se_puede_evaluar": "No se pueden confirmar espesores de pared, presión de servicio, fluido transportado ni si la válvula está bajo presión; se requiere inspección con equipo despresurizado y bloqueado."
    }
  },
  {
    "img": "s/n16.jpg",
    "kind": "tablero",
    "credit": "old fuse boxes · johnclarkemills · CC BY 2.0",
    "link": "https://www.flickr.com/photos/24385323@N08/3963553325",
    "ms": 5455,
    "result": {
      "resumen": "Gabinete eléctrico con dos interruptores montados sobre tabla de madera expuesta, con cableado y tuberías visibles; presenta deficiencias de protección y orden.",
      "estado": "observaciones",
      "hallazgos": [
        {
          "titulo": "Gabinete sin cerrar ni protección adecuada",
          "detalle": "Dos interruptores están montados sobre una tabla de madera sin puerta ni cubierta que los proteja de contacto accidental, polvo o humedad, lo que aumenta el riesgo de contacto eléctrico y daño a los equipos.",
          "severidad": "alta",
          "accion": "Instalar un gabinete o panel eléctrico cerrado con puerta y grado de protección adecuado al entorno, y fijar los interruptores dentro de él.",
          "caja": [
            450,
            100,
            830,
            580
          ]
        },
        {
          "titulo": "Cableado expuesto y desordenado",
          "detalle": "Se observan cables sueltos y colgantes en la parte izquierda del tablero, sin canalización ni sujeción, lo que puede causar daños mecánicos, cortocircuitos o contacto accidental.",
          "severidad": "media",
          "accion": "Derivar los cables por canaletas o tuberías protegidas, sujetarlos con abrazaderas y etiquetar los circuitos.",
          "caja": [
            0,
            0,
            330,
            500
          ]
        },
        {
          "titulo": "Tubería metálica sin protección y posible conexión a tierra dudosa",
          "detalle": "Una tubería metálica vertical recorre la pared junto al tablero; no se confirma si está conectada a tierra ni si cumple como conductor de protección, lo cual es crítico en instalaciones eléctricas.",
          "severidad": "media",
          "accion": "Verificar la continuidad y conexión a tierra de la tubería metálica por un electricista autorizado, y protegerla contra golpes y corrosión.",
          "caja": [
            300,
            0,
            360,
            990
          ]
        },
        {
          "titulo": "Base de madera no apta para equipo eléctrico",
          "detalle": "Los interruptores están fijados sobre una tabla de madera cruda, material no adecuado como soporte permanente para equipos eléctricos por riesgo de incendio y falta de rigidez.",
          "severidad": "media",
          "accion": "Reemplazar la tabla de madera por un panel o estructura metálica apta para montaje eléctrico, fijada firmemente a la pared.",
          "caja": [
            450,
            100,
            830,
            580
          ]
        },
        {
          "titulo": "Cables negros sin identificación ni protección en su recorrido",
          "detalle": "Dos cables negros descienden desde los interruptores sin canalización visible y sin identificación de fase o propósito, lo que dificulta la operación segura y el mantenimiento.",
          "severidad": "baja",
          "accion": "Proteger los cables en tubo rígido o flexible y etiquetar cada conductor según su función.",
          "caja": [
            540,
            450,
            720,
            990
          ]
        }
      ],
      "no_se_puede_evaluar": "No se puede confirmar si los interruptores están energizados, si existe protección diferencial, si la instalación está conectada a tierra correctamente ni si cumple con la normativa eléctrica chilena vigente."
    }
  }
];
