# developer guide #
* general information
* how to create an example for a terra-component

## general information ##
* "Terra-Components-Doc" is used to dynamically create a documentation 
for all existing Terra components.
* if you add or change some code in a component it automatically updates the api at the documentation.

## how to create an example ##
* if you created a new component or want to add an example to an existing component <br>
  this guide will show you which requirements you need to fulfill so 
  that the documentation works properly.
<space>
* the component directory without example may looks like this.

<space>
<img src="../src/app/assets/images/step1.png" width="1000px ">

* create an directory inside the component folder and name it `example` the name is very important. 

<space>
<img src="../src/app/assets/images/step2.png" width="1000px ">

* now you need to create three files
  * the `html` , `scss` , `ts` file.
  * optional you can create a `markdown` file to show text at the overview.
  * the correct convention to name a file is '`selector`.component.example.extention'
  * `example`: 'terra-button.component.example.ts'
 
 
* after you are done the directory should look like this.   

<space>
<img src="../src/app/assets/images/step3.png" width="1000px">

* the documentation renders the example component you are writing.
* create a angular component.
	* the correct convention to name the component `selector` is '`selector`-example'
	* `example`: 'terra-button-example'
	* link the `html` and `scss` file to the component

<space>
<img src="../src/app/assets/images/step4.png" width="1000px height="200px"">

* finally add the new example component to the `NgModule` at the 'terra-components.module.ts' file.
	* add the component name to `declarations`, `entryComponents` and `exports`.
	
<space>
<img src="../src/app/assets/images/step5.png" width="1000px height="200px""> 