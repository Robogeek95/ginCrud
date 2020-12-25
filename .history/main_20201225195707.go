package main

import (
	"fmt"
)

func main() {
	config.DB, err = gorm.open()

	if err != nil {
		fmt.Println("Status:", err)

		defer config.DB.Close()
		config.DB.AutoMigrate(&Models.User{})

		r := Routes.SetupRouter()

		r.Run()
	}
}
