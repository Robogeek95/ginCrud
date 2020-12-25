package routes

import (
	"github.com/robogeek95/ginCrud/controllers"

	"github.com/gin-gonic/gin"
)

// SetupRouter ... setup the router
func SetupRouter() *gin.Engine {
	r := gin.Default()
	materials := r.Group("/api/v1")
	{
		materials.GET("materials", controllers.GetMaterials)
		materials.POST("materials", controllers.CreateMaterial)
		materials.GET("materials/:id", controllers.GetMaterialByID)
		materials.PUT("materials/:id", controllers.UpdateMaterial)
		materials.DELETE("materials/:id", controllers.DeleteMaterial)
	}
	return r
}
