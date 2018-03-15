import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {Recipe} from "../../models/recipe";
import {EditRecipePage} from "../edit-recipe/edit-recipe";
import {ShoppingListService} from "../../services/shopping-list";
import {RecipesService} from "../../services/recipes";

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage implements OnInit {
  recipe: Recipe;
  index: number;

  constructor(private navParams: NavParams,
              private navCtrl: NavController,
              private slService: ShoppingListService,
              private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipe = this.navParams.get('recipe');
    this.index = this.navParams.get('index');
  }

  // ionViewWillEnter() {
  //   this.recipe = this.navParams.get('recipe');
  // }

  onEditRecipe() {
    this.navCtrl.push(EditRecipePage, {mode: 'Edit', recipe: this.recipe, index: this.index});
  }

  onAddIngredients() {
    this.slService.addItems(this.recipe.ingredients);
  }

  onDeleteRecipe() {
    this.recipesService.removeRecipe(this.index);
    this.navCtrl.popToRoot();
  }

}
