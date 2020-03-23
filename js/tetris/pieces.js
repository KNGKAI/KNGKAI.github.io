import * as three from '../three/three.module.js'

var geo = new three.BoxGeometry(1, 1, 1);
var mat = new three.MeshStandardMaterial({color: '#ffffff'});

var node = function(x, y, z){
    var c = new three.Mesh(geo, mat);
    
    c.position.x = x;
    c.position.y = y;
    c.position.z = z;
    
    return c;
}

var cube = function(){
    var piece = new three.Object3D();
    
    piece.add(node(0, 0, 0));
    piece.add(node(0, 1, 0));
    piece.add(node(1, 0, 0));
    piece.add(node(1, 1, 0));

    return piece;
}

var line = function(){
    var piece = new three.Object3D();
    
    piece.add(node(0, 0, 0));
    piece.add(node(0, 1, 0));
    piece.add(node(0, 2, 0));
    piece.add(node(0, 3, 0));

    return piece;
}

var tri = function(){
    var piece = new three.Object3D();
    
    piece.add(node(-1, 0, 0));
    piece.add(node(0, 0, 0));
    piece.add(node(1, 0, 0));
    piece.add(node(0, 1, 0));

    return piece;
}

var l = function(){
    var piece = new three.Object3D();
    
    piece.add(node(0, 0, 0));
    piece.add(node(0, 1, 0));
    piece.add(node(0, 2, 0));
    piece.add(node(1, 0, 0));

    return piece;
}

var lFlip = function(){
    var piece = new three.Object3D();
    
    piece.add(node(1, 0, 0));
    piece.add(node(1, 1, 0));
    piece.add(node(1, 2, 0));
    piece.add(node(0, 0, 0));

    return piece;
}

var s = function(){
    var piece = new three.Object3D();
    
    piece.add(node(0, 0, 0));
    piece.add(node(0, 1, 0));
    piece.add(node(1, 1, 0));
    piece.add(node(1, 2, 0));

    return piece;
}

var sFlip = function(){
    var piece = new three.Object3D();
    
    piece.add(node(1, 0, 0));
    piece.add(node(1, 1, 0));
    piece.add(node(0, 1, 0));
    piece.add(node(0, 2, 0));

    return piece;
}

export {node, cube, line, tri, l, lFlip, s, sFlip}