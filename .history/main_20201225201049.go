package main

import (
	"fmt"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var err error
var db *gorm.DB

func main() {

	db, err = gorm.Open("mysql", "root:12345@/demo?charset=utf8&parseTime=True&loc=Local")

	if err != nil {
		fmt.Println("Status:", err)
		panic("Can't connect to database")
	}

	defer db.Close()
	// db.AutoMigrate(&Models.User{})

	// r := Routes.SetupRouter()

	// r.Run()
}
