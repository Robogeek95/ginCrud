package main

import (
	"fmt"

	"github.com/robogeek95/ginCrud/config"
	"github.com/robogeek95/ginCrud/models"
	"github.com/robogeek95/ginCrud/routes"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var err error
var db *gorm.DB

func main() {

	db, err = gorm.Open("mysql", "robogeek:password@/first_gin?charset=utf8&parseTime=True&loc=Local")
	config.DB, err = gorm.Open("mysql", config.DbURL(config.BuildDBConfig()))

	if err != nil {
		fmt.Println("Status:", err)
		panic("Can't connect to database")
	}
	fmt.Println("connected to database")

	defer db.Close()

	db.AutoMigrate(&models.Material{})

	r := routes.SetupRouter()

	r.Run()
}
