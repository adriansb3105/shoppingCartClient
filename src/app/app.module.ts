import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { UpdateClientInformationComponent } from './update-client-information/update-client-information.component';
import { ShopingcartReportsComponent } from './shopingcart-reports/shopingcart-reports.component';
import { BusinesInformationComponent } from './busines-information/busines-information.component';
import { RetrieveCategoryComponent } from './retrieve-category/retrieve-category.component';
import { ManageInventoryComponent } from './manage-inventory/manage-inventory.component';
import { InsertInventoryComponent } from './insert-inventory/insert-inventory.component';
import { RetrieveProductComponent } from './retrieve-product/retrieve-product.component';
import { ProductsByNameComponent } from './products-by-name/products-by-name.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { HomeManagerComponent } from './home-manager/home-manager.component';
import { HomeClientComponent } from './home-client/home-client.component';
import { CategoryComponent } from './categoryPrueba/category.component';
import { CategoryCComponent } from './category-c/category-c.component';
import { MyBillsComponent } from './my-bills/my-bills.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

import { LogicService } from './logic.service';
import { FilterPipe } from './filter.pipe';

const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'category', component: CategoryComponent },
	{
		path: 'category', children: [
			{
				path: 'category-c', component: CategoryCComponent, children: [
					{ path: 'detail/:name', component: CategoryComponent }
				]
			},
		]
	},
	{ path: 'business-information', component: BusinesInformationComponent },
	{ path: 'create-category', component: CreateCategoryComponent },
	{ path: 'create-product', component: CreateProductComponent },
		{ path: 'insert-inventory', component: InsertInventoryComponent },
	{ path: 'manage-inventory', component: ManageInventoryComponent },
	{ path: 'business-information', component: BusinesInformationComponent },
	{ path: 'create-category', component: CreateCategoryComponent },
	{ path: 'create-product', component: CreateProductComponent },
		{ path: 'retrieve-category', component: RetrieveCategoryComponent },
	{ path: 'retrieve-product', component: RetrieveProductComponent },
	{ path: 'shopingcart-reports', component: ShopingcartReportsComponent },
	{ path: 'update-category', component: UpdateCategoryComponent },
	{ path: 'home-manager', component: HomeManagerComponent },
	{ path: 'home-client', component: HomeClientComponent },
	{ path: 'logout', component: LogoutComponent },
	{ path: 'sign-in', component: SignInComponent },
	{ path: 'shoping-cart', component: ShopingCartComponent },
	{ path: 'update-client-information', component: UpdateClientInformationComponent },
	{ path: 'products', component: ProductsByNameComponent },
	{ path: 'bill', component: BillComponent },
	{ path: 'my-bills', component: MyBillsComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', redirectTo: '/home', pathMatch: 'full' }

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
		CreateProductComponent,
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
		BillComponent,
		MyBillsComponent,
		FilterPipe
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes),
		HttpClientModule,
		HttpModule,
		FormsModule
	],
	providers: [
		LogicService,
		FilterPipe
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
