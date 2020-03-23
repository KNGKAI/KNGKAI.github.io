import * as three from '../three/three.module.js'
import * as piece from './pieces.js'

var renderer = new three.WebGLRenderer({antialias:true});

renderer.setClearColor("#2F2F2F");
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement )

var scene = new three.Scene();

var light = new three.DirectionalLight("#ffffff", 1)

light.position.z = 1;

scene.add(light)

var camera = new three.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000)

var size = 10;

var w = window.innerWidth / window.innerHeight * size;
var h = size;

var camera = new three.OrthographicCamera(-w, w, h, -h, 0.1, 1000);

camera.position.z = 5;

function start() {
    var a = piece.cube();
    a.position.x = -9;
    var b = piece.tri();
    b.position.x = -5;
    var c = piece.l();
    c.position.x = -2;
    var d = piece.lFlip();
    d.position.x = 1;
    var e = piece.s();
    e.position.x = 4;
    var f = piece.sFlip();
    f.position.x = 7;

    scene.add(a);
    scene.add(b);
    scene.add(c);
    scene.add(d);
    scene.add(e);
    scene.add(f);
}

function update(delta) {
    
}

function render() {
    requestAnimationFrame( render );
    renderer.render(scene, camera);

    update(0.1);
}

start();
render();