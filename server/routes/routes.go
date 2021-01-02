package routes

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/robogeek95/ginCrud/controllers"
)

// SetupRouter ... setup the router
func SetupRouter() *gin.Engine {
	r := gin.Default()

	// same as
	// config := cors.DefaultConfig()
	// config.AllowAllOrigins = true
	// router.Use(cors.New(config))
	r.Use(cors.Default())

	group := r.Group("/api/v1/")
	{
		group.GET("/", controllers.GetWelcome)

		materials := group.Group("/materials")
		{
			materials.GET("/", controllers.GetMaterials)
			materials.POST("/", controllers.CreateMaterial)
			materials.GET("/:id", controllers.GetMaterialByID)
			materials.PUT("/:id", controllers.UpdateMaterial)
			materials.DELETE("/:id", controllers.DeleteMaterial)
		}

	}
	return r
}
