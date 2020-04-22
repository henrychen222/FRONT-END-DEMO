/**
 * 10.25 night
 * https://material.angular.io/components/tree/overview#nested-tree
 */
import {Component, OnInit} from '@angular/core';
import {NestedTreeControl} from "@angular/cdk/tree";
import {MatTreeNestedDataSource} from "@angular/material/tree";

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussel sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];

/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'app-tree3',
  templateUrl: './tree3.component.html',
  styleUrls: ['./tree3.component.css']
})
export class Tree3Component implements OnInit {

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  ngOnInit() {
  }

}
