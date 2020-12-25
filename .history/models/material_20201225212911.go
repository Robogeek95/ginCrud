package models

import (
	"first-api/Config"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

//GetAllMaterials Fetch all user data
func GetAllMaterials(material *[]materials) (err error) {
	if err = config.DB.Find(material).Error; err != nil {
		return err
	}
	return nil
}

//CreateUser ... Insert New data
func CreateMaterial(material *material) (err error) {
	if err = config.DB.Create(material).Error; err != nil {
		return err
	}
	return nil
}

//GetUserByID ... Fetch only one user by Id
func GetUserByID(material *material, id string) (err error) {
	if err = config.DB.Where("id = ?", id).First(user).Error; err != nil {
		return err
	}
	return nil
}

//UpdateUser ... Update user
func UpdateUser(user *User, id string) (err error) {
	fmt.Println(user)
	Config.DB.Save(user)
	return nil
}

//DeleteUser ... Delete user
func DeleteUser(user *User, id string) (err error) {
	Config.DB.Where("id = ?", id).Delete(user)
	return nil
}
