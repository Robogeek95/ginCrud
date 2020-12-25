package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/robogeek95/ginCrud/models"
)

//GetMaterials ... Get all users
func GetMaterials(c *gin.Context) {
	var user []models.Material
	err := Models.GetAllUsers(&user)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, user)
	}
}
