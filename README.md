# Inspector de terreno

**Sacas una foto de un tablero, una correa o un equipo. La IA marca lo que ve mal, dice qué hacer y arma la orden de trabajo.**

[![Abrir la máquina](https://img.shields.io/badge/Probar-jsnn15.github.io%2Finspector-76b900?style=for-the-badge)](https://jsnn15.github.io/inspector/)
![NVIDIA Nemotron VL](https://img.shields.io/badge/NVIDIA-Nemotron%20VL-76b900?style=flat-square&logo=nvidia&logoColor=white)
![Sin build](https://img.shields.io/badge/HTML%20%2B%20JS-sin%20dependencias-555?style=flat-square)
![Licencia](https://img.shields.io/badge/c%C3%B3digo-Apache--2.0-blue?style=flat-square)

**Español** · [English](README.en.md)

<a href="https://jsnn15.github.io/inspector/"><img src="docs/demo.gif" alt="La IA marca hallazgos numerados sobre la foto de un tablero y lista la acción de cada uno" width="100%"></a>

## El problema

Una inspección de terreno termina en una foto en el celular y una nota que alguien transcribe después. La observación pierde contexto, la severidad depende de quién la escribió y la orden de trabajo llega tarde.

## Cómo funciona

<img src="docs/flujo.svg" alt="Foto, reducción en el navegador, servidor intermedio, Nemotron VL y marcas con orden de trabajo" width="100%">

```mermaid
sequenceDiagram
    autonumber
    participant U as Inspector (celular)
    participant P as Página (navegador)
    participant G as nv-gateway (Cloudflare)
    participant N as NVIDIA Nemotron VL
    U->>P: Foto del tablero, correa o equipo
    P->>P: Reduce a 1280 px JPEG (≤ 1,5 MB)
    P->>G: POST /inspect {imagen, tipo}
    G->>G: Revisa origen, tamaño y límite por IP
    G->>N: Prompt de inspector senior + imagen
    N-->>G: JSON: resumen, estado, hallazgos[] con caja 0-1000
    G-->>P: Resultado validado
    P->>U: Marcas numeradas, acciones y orden imprimible
```

Cada hallazgo vuelve con **título, detalle, severidad (alta, media, baja), acción concreta y su caja** en coordenadas normalizadas. La página dibuja las cajas sobre la foto y arma la orden de trabajo. El modelo también declara **lo que la foto no permite confirmar**, para no inventar.

## Decisiones de diseño

| Decisión | Por qué |
|---|---|
| La página nunca ve la clave de NVIDIA | Va como secreto en [nv-gateway](https://github.com/JSNN15/nv-gateway), que solo acepta este sitio y limita las consultas. |
| Prompt según el tipo de activo | Un tablero, una correa y un equipo rotatorio tienen fallas distintas: el prompt cambia la lista de chequeo. |
| Salida en JSON con cajas 0-1000 | Independiente de la resolución, y la página dibuja sin depender del modelo. |
| Reintento si el JSON viene mal | Si la respuesta no se puede leer, el intermediario repara comas o pide de nuevo una vez. |
| Ejemplos guardados | Las 17 fotos de ejemplo (tableros, válvulas, cámaras de cables, galerías inundadas, estructuras) cargan al instante y sin gastar consultas; la foto propia sí llama a la IA. |
| Cámara en vivo | El botón Cámara abre la cámara del celular, tablet o PC en la misma página (getUserMedia, cámara trasera por defecto) y analiza el cuadro capturado. Si el navegador no lo permite, abre la cámara del sistema. |

## Límites

- La IA ve lo que está en la foto: no mide temperatura, torque ni aislación. Es un primer filtro, no reemplaza la inspección con instrumentos.
- La severidad es una propuesta del modelo; la decide el inspector.
- Las cajas son aproximadas: sirven para ubicar, no para medir.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | La máquina completa: interfaz, dibujo de marcas y orden de trabajo. Sin build ni dependencias. |
| `s/` | Fotos de ejemplo con su resultado guardado. |
| `docs/` | GIF de la demo y diagramas. |

Para probarla en local: `python3 -m http.server 8770` y abre `http://localhost:8770`. Las llamadas en local van a `http://localhost:8787`, donde corre `nv-gateway` con `node dev.mjs`.

## Créditos

Fotos de ejemplo (licencias de sus autores, no Apache-2.0): *Electrical Panel* (peretzp), *square-d distribution board* (h080), *Green is the colour of...* (Jens Rost), *Electric panel* (sparr0), *Open room distribution board* (seeweb), todas CC BY-SA 2.0 vía Openverse; cuadro de correa de BeltCrack (Huang y otros, 2026, CC BY-SA 4.0). Además, vía Openverse: *Old Fuse Box* (chrstphre), *DSC00360* (dcmorton), *09. Water Pumped out of Tracks* (MTAPhotos), *6120 old fuse box* (crabchick), *Chambre bien remplie* (Point d'Appui National ANT), *Old Columbus Road Lift Bridge Span* (lungstruck), *Old Rusty Valve* (Gordon M Robertson), *old fuse boxes* (johnclarkemills), CC BY 2.0; *Rusty Valve* (mikecogh), *Outdoor Gas Installation* (christian.senger), *Old fuse box* (Valerie Everett), CC BY-SA 2.0. Enlaces en el pie de la página.

---

<sub>Proyecto personal de **Julián Neira Nova**, ingeniero eléctrico con 10 años en faena · Servicio y Soluciones Tecnológicas DelaCruz SpA. Nada de lo publicado proviene de clientes ni de empleadores.
[Portafolio](https://jsnn15.github.io/) · [LinkedIn](https://www.linkedin.com/in/julian-neira-nova/) · [Todas las máquinas](https://github.com/JSNN15)</sub>
