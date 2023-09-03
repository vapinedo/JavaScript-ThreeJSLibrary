import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const rendered = new THREE.WebGLRenderer();

rendered.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(rendered.domElement);