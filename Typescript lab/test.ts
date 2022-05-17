// //--1--
// //--A--
// class Rectangle{
//     widith:number;
//     hight:number;
//    constructor(widith:number,hight:number){
//        this.widith=widith;
//        this.hight=hight;
//    }
//    CalcCircumference(widith:number,hight:number){
//        return console.log( 2*(widith+hight));
//    }
//    static WhoAmI(){
//        return console.log("I am rectangle");
//     }
// }
// //--B--
// class Square extends Rectangle{
//    long:number
//    constructor(long:number){
//        super(2,2);
//    }
//    CalcCircumference(long){
//        return console.log( 4*long);
//    }
//    static WhoAmI(): void {
//        return console.log("I am square");
//    }
// }
// //--c--
// let r1:Rectangle=new Rectangle(2,2);
// r1.CalcCircumference(2,2);
// Rectangle.WhoAmI();

// let s1:Square=new Square(5);
// s1.CalcCircumference(4);
// Square.WhoAmI();

//--2--
// //--A-type annotation-
// let string:string ="medo";
// let num:number=541;
// let ahmed:any="ahmed"
// //--A-union-
// function id(id: number | string) {
//     console.log("Your ID is: " + id);
//   }
//   id(100);
//--B--
// function add(a:string, b:string):string;
// //--c--
// function add(a:number, b:number): number;
// //--c--
// function add(a: any, b:any): any {
//     return a + b;
// }
// add("Hello ", "Steve"); 
// add(10, 20); 
// //--D--
// interface IPoint1 {
//     x: number;
//     y: number;
// }
// class parant{
//     constructor(name:string,age:number){

//     }
// }
// class Son extends parant{
//     constructor(){
//         super(ahmed,25);
//     }
// }
//--E--
// function generic<T>(arg:T):T{
//     return arg;
// }
//--f--
// enum Color{
//     red="red",
//     green="green",
//     black="black"
// }
//--G--
// namespace Validation {
//      interface IPoint1 {
//       isAcceptable(s: string): boolean;
//     }
// }
//--H--
// import {IPoint} from './interface/interface';
// let point2:IPoint{
//     x: number
// }


//--1-Stack-
// class Stack<T> {
//      stack: T[];
//      length: number;
//       maxSize: number;
//      constructor(maxSize: number) {
//         this.length = 0;
//         this.maxSize = maxSize;
//         this.stack = new Array<T>(this.maxSize);
//     }
//      isEmpty(): boolean {
//         return this.length === 0;
//     }
//      isFull(): boolean {
//         return this.length === this.maxSize;
//     }
//      push(newItem: T): void {
//         if (this.isFull()) {
//             throw new Error('Stack overflow');
//         }
//         this.stack[this.length++] = newItem;
//     }
//     public pop(): T {
//         if (this.isEmpty()) {
//             throw new Error('Stack underflow');
//         }
//         const retval = this.stack[--this.length];
//         return retval;
//     }
//     public top(): T {
//         if (this.isEmpty()) {
//             throw new Error('Stack is empty');
//         }
//         return this.stack[this.length - 1];
//     }
    
// }

// const stack = new Stack<string>(this.length);

//--2--LinkedList
// namespace DS {
//     export class Node<T> {
//          item: T | null;
//          next: Node<T> | null;

//          constructor(item: T | null = null) {
//             this.item = item;
//             this.next = null;
//         }
//     }
// }
// class LinkedList<T> {
//     private head: DS.Node<T>;
//     private tail: DS.Node<T>;
//     constructor() {
//         this.head = new DS.Node<T>();
//         this.tail = new DS.Node<T>();
//         this.head.next = this.tail;
//     }
//     public isEmpty(): boolean {
//         return this.head.next === this.tail;
//     }
//     public insertFirst(item: T): void {
//         const newNode = new DS.Node<T>(item);
//         newNode.next = this.head.next;
//         this.head.next = newNode;
//     }
//     public insertLast(item: T): void {
//         const newNode = new DS.Node<T>(item);
//         let cur: DS.Node<T> | null = this.head;
//         while (cur && cur.next !== this.tail) {
//             cur = cur.next;
//         }
//         if (cur) {
//             newNode.next = this.tail;
//             cur.next = newNode;
//         }
//     }
//     public removeFirst(): T | null {
//         if (this.isEmpty()) {
//             throw new Error('List is empty');
//         }
//         let rv: DS.Node<T> | null = this.head.next;
//         if (rv) {
//             this.head.next = rv.next;
//             rv.next = null;
//         }
//         return rv ? rv.item : null;
//     }
//     public remove(searchKey: T): T | null {
//         if (this.isEmpty()) {
//             throw new Error('List is empty');
//         }
//         let rv: DS.Node<T> | null = null;
//         let cur: DS.Node<T> = this.head;
//         while (cur.next && cur.next.item !== searchKey) {
//             cur = cur.next;
//         }
//         if (cur.next) {
//             rv = cur.next;
//             cur.next = cur.next.next;
//             rv.next = null;
//         }
//         return rv && rv.item ? rv.item : null;
//     }
//     public contains(searchItem: T): boolean {
//         if (this.isEmpty()) {
//             throw new Error('List is empty');
//         }
//         let rv: boolean = false;
//         let cur: DS.Node<T> | null = this.head;
//         while (cur && cur.next !== this.tail) {
//             if (cur.next && cur.next.item === searchItem) {
//                 rv = true;
//                 break;
//             }
//             cur = cur.next;
//         }
//         return rv;
//     }
//     public getFirst(): T | null {
//         if (this.isEmpty()) {
//             throw new Error('List is empty');
//         }
//         return this.head.next ? this.head.next.item : null;
//     }
//     public listContents(): void {
//         let cur = this.head.next;
//         while (cur && cur !== this.tail) {
//             console.log(`${cur.item}`);
//             cur = cur.next;
//         }
//     }
// }
//--3--


