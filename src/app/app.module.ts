import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './categoryPrueba/category.component';
import { CategoryCComponent } from './category-c/category-c.component';
import { LoginComponent } from './login/login.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ManageInventoryComponent } from './manage-inventory/manage-inventory.component';
import { ShopingcartReportsComponent } from './shopingcart-reports/shopingcart-reports.component';
import { BusinesInformationComponent } from './busines-information/busines-information.component';
import { InsertInventoryComponent } from './insert-inventory/insert-inventory.component';
import {RetrieveCategoryComponent} from './retrieve-category/retrieve-category.component';
import { RetrieveProductComponent } from './retrieve-product/retrieve-product.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeManagerComponent } from './home-manager/home-manager.component';
import { HomeClientComponent } from './home-client/home-client.component';
import {RouterModule, Routes} from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { UpdateClientInformationComponent } from './update-client-information/update-client-information.component';
import { ProductsByNameComponent } from './products-by-name/products-by-name.component';
import { ProductsByCategoryComponent } from './products-by-category/products-by-category.component';
import { BillComponent } from './bill/bill.component';
import { MyBillsComponent } from './my-bills/my-bills.component';

const appRoutes:Routes =[
  {path:'home',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'about',component: AboutComponent},
  {path:'category',component: CategoryComponent},
  {path:'category',children:[
    {path:'category-c',component:CategoryCComponent,children:[
      {path:'detail/:name',component: CategoryComponent}
    ]}, 
  ]},
  {path:'business-information',component: BusinesInformationComponent},
    {path:'create-category',component: CreateCategoryComponent},
    {path:'create-product',component: CreateProductComponent},
    {path:'delete-category',component: DeleteCategoryComponent},
    {path:'insert-inventory',component: InsertInventoryComponent},
    {path:'manage-inventory',component: ManageInventoryComponent},
    {path:'business-information',component: BusinesInformationComponent},
  {path:'create-category',component: CreateCategoryComponent},
  {path:'create-product',component: CreateProductComponent},
  {path:'delete-product',component: DeleteProductComponent},
  {path:'retrieve-category',component:RetrieveCategoryComponent },
  {path:'retrieve-product',component:RetrieveProductComponent },
  {path:'shopingcart-reports',component:ShopingcartReportsComponent },
  {path:'update-category',component:UpdateCategoryComponent },
  {path:'update-product',component:UpdateProductComponent },
  {path:'home-manager',component:HomeManagerComponent },
  {path:'home-client',component:HomeClientComponent },
  {path:'logout',component:LogoutComponent },
  {path:'sign-in',component:SignInComponent },
  {path:'shoping-cart',component:ShopingCartComponent },
  {path:'update-client-information',component:UpdateClientInformationComponent},
  {path:'products-by-name',component:ProductsByNameComponent},
  {path:'products-by-category',component:ProductsByCategoryComponent},
  {path:'bill',component:BillComponent},
  {path:'my-bills',component:MyBillsComponent},
  {path: '',redirectTo:'/home',pathMatch:'full'},
  {path:'**',redirectTo:'/home',pathMatch:'full'}

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CategoryComponent,
    CategoryCComponent,
    LoginComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent,
    DeleteCategoryComponent,
    CreateProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ManageInventoryComponent,
    ShopingcartReportsComponent,
    BusinesInformationComponent,
    InsertInventoryComponent,
    RetrieveProductComponent,
    RetrieveCategoryComponent,
    LogoutComponent,
    HomeManagerComponent,
    HomeClientComponent,
    SignInComponent,
    ShopingCartComponent,
    UpdateClientInformationComponent,
    ProductsByNameComponent,
    ProductsByCategoryComponent,
    BillComponent,
    MyBillsComponent
   
 
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
