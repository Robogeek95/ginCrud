package controllers

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/robogeek95/ginCrud/models"
)

//GetMaterials ... Get all users
func GetMaterials(c *gin.Context) {
	var material []models.Material
	err := models.GetAllMaterials(&material)
	if err != nil {
		fmt.Println(err.Error())
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, material)
	}
}

//CreateMaterial ... Create User
func CreateMaterial(c *gin.Context) {
	var material models.Material
	c.BindJSON(&material)
	err := models.CreateMaterial(&material)
	if err != nil {
		fmt.Println(err.Error())
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, material)
	}
}

//GetMaterialByID ... Get the material by id
func GetMaterialByID(c *gin.Context) {
	id := c.Params.ByName("id")
	var material models.Material
	err := models.GetMaterialByID(&material, id)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, material)
	}
}

// UpdateMaterial ... update a material by id
func UpdateMaterial(c *gin.Context) {
	id := c.Params.ByName("id")
	var material models.Material

	// first get the material
	err := models.GetMaterialByID(&material, id)

	if err != nil {
		c.JSON(http.StatusNotFound, id)
	}

	c.BindJSON(&material)

	// then update it
	err = models.UpdateMaterial(&material, id)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, material)
	}
}

// DeleteMaterial ... delete a material by id
func DeleteMaterial(c *gin.Context) {
	var material models.Material
	id := c.Params.ByName("id")
	err := models.DeleteMaterial(&material, id)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, gin.H{"material" + id: "is deleted"})
	}
}
