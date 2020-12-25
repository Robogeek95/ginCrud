package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

//GetMaterials ... Get all users
func GetMaterials(c *gin.Context) {
	var user []Models.Material
	err := Models.GetAllUsers(&user)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, user)
	}
}
