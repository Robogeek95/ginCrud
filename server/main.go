package main

import (
	"fmt"

	"github.com/robogeek95/ginCrud/config"
	"github.com/robogeek95/ginCrud/routes"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var err error
var db *gorm.DB

func main() {

	// setUp the database
	config.DB, err = gorm.Open("mysql", config.DbURL(config.BuildDBConfig()))

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
