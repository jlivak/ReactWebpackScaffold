import React, {Component, RefObject} from "react";
import * as THREE from 'three';
import './ThreeJsContainer.css';
import {Vector2} from "three";

export default class ThreeJsContainer extends Component {

    public mount: RefObject<HTMLDivElement>;

    private readonly ENABLE_ANTIALIASING: boolean = false;

    private mousePosition: Vector2 = new Vector2();
    private mouseLeftClick: boolean = false;

    private renderer: THREE.WebGLRenderer;
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;

    constructor(props: any) {
        super(props);
        this.mount = React.createRef<HTMLDivElement>();
    }

    componentDidMount() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(.8, .8, .8);
        this.camera = new THREE.PerspectiveCamera(75, this.mount.current.offsetWidth / this.mount.current.offsetHeight, 0, 10000);
        this.renderer = new THREE.WebGLRenderer( {antialias: this.ENABLE_ANTIALIASING });
        this.renderer.setSize(this.mount.current.offsetWidth, this.mount.current.offsetHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.enabled = true;
        this.renderer.domElement.classList.add("ThreeJsCanvas")
        this.mount.current.appendChild(this.renderer.domElement);

        this.renderer.setAnimationLoop((delta: number) => {
            this.onUpdate(delta);
            this.onDraw(delta);
        });

        window.addEventListener('resize', this.onWindowResize.bind(this));
        document.addEventListener('mousemove', this.onDocumentMouseMove.bind(this), false);
        document.addEventListener('mousedown', this.onDocumentMouseDown.bind(this));
        document.addEventListener('mouseup', this.onDocumentMouseUp.bind(this));
    }

    onUpdate(delta: number): void {
    }

    onDraw(delta: number): void {
    }

    onDocumentMouseDown(event: any): void {
        this.mouseLeftClick = true;
    }

    onDocumentMouseUp(event: any): void {
        this.mouseLeftClick = false;
    }

    onDocumentMouseMove(event: any): void {
        event.preventDefault();
        this.mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mousePosition.y = (event.clientY / window.innerHeight) * 2 + 1;
    }

    onWindowResize(): void {
        this.camera.aspect = this.mount.current.offsetWidth / this.mount.current.offsetHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.mount.current.offsetWidth, this.mount.current.offsetHeight);
    }

    render(): React.ReactElement {
        return (
          <div className="ThreeContainer" ref={this.mount} >

          </div>
        );
    }
}
