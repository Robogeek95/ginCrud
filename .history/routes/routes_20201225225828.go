package routes

import (
	"github.com/robogeek95/ginCrud/controllers"

	"github.com/gin-gonic/gin"
)

// SetupRouter ... setup the router
func SetupRouter() *gin.Engine {
	r := gin.Default()
	{
		r.
	}
	materials := r.Group("/api/v1/materials")
	{
		materials.GET("/", controllers.GetMaterials)
		materials.POST("/", controllers.CreateMaterial)
		materials.GET("/:id", controllers.GetMaterialByID)
		materials.PUT("/:id", controllers.UpdateMaterial)
		materials.DELETE("/:id", controllers.DeleteMaterial)
	}
	return r
}
