package main

import (
	"fmt"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/robogeek95/ginCrud/config"
	"github.com/robogeek95/ginCrud/models"
	"github.com/robogeek95/ginCrud/routes"
	_ "gorm.io/driver/postgres"
)

var err error

func main() {

	// setUp the database

	// config.DB, err = gorm.Open("mysql", config.DbURL(config.BuildDBConfig()))

	// dsn := "host=localhost user=gorm password=gorm dbname=gorm port=9920 sslmode=disable TimeZone=Asia/Shanghai"
	config.DB, err = gorm.Open("postgres", "user=postgres password=roborealm1 dbname=gincrud1 sslmode=disable")

	// Migrate the schema
	config.DB.AutoMigrate(&models.Material{})

	if err != nil {
		fmt.Println("Status:", err)
		panic("Can't connect to database")
	}
	fmt.Println("connected to database")

	// Initialize the routes
	r := routes.SetupRouter()

	// Start serving the application
	r.Run()
}
