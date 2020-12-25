package Routes

import (
	"github.com/robogeek95/ginCrud/controllers"

	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()
	group1 := r.Group("/api/v1")
	{
		group1.GET("materials", Controllers.GetMaterials)
		group1.POST("materials", Controllers.GetMaterials)
		group1.GET("materials/:id", Controllers.GetMaterialByID)
		group1.PUT("materials/:id", Controllers.UpdateMaterial)
		group1.DELETE("materials/:id", Controllers.DeleteMaterial)
	}
	return r
}
