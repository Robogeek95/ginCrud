package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/robogeek95/ginCrud/models"
)

//GetMaterials ... Get all users
func GetMaterials(c *gin.Context) {
	var material []models.Material
	err := models.GetAllMaterials(&material)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, material)
	}
}
