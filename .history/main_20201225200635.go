package main

import (
	"fmt"

	"github.com/jinzhu/gorm"
)

var err error
var db *gorm.DB

func main() {

	db, err = gorm.Open("mysql", "root:12345@/demo?charset=utf8&parseTime=True&loc=Local")

	if err != nil {
		fmt.Println("can't connect to database")
		fmt.Println("Status:", err)
	}

	defer db.Close()
	// db.AutoMigrate(&Models.User{})

	// r := Routes.SetupRouter()

	// r.Run()
}
