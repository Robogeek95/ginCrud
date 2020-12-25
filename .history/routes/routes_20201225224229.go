package routes

import (
	"github.com/robogeek95/ginCrud/controllers"

	"github.com/gin-gonic/gin"
)

// SetupRouter ... setup the router
func SetupRouter() *gin.Engine {
	r := gin.Default()
	group1 := r.Group("/api/v1")
	{
		group1.GET("materials", controllers.GetMaterials)
		group1.POST("materials", controllers.createMaterials)
		group1.GET("materials/:id", controllers.GetMaterialByID)
		group1.PUT("materials/:id", controllers.UpdateMaterial)
		group1.DELETE("materials/:id", controllers.DeleteMaterial)
	}
	return r
}
