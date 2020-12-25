package models

import (
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"github.com/robogeek95/ginCrud/config"
)

//GetAllMaterials Fetch all user data
func GetAllMaterials(material *[]material) (err error) {
	if err = config.DB.Find(material).Error; err != nil {
		return err
	}
	return nil
}

//CreateMaterial ... Insert New data
func CreateMaterial(material *material) (err error) {
	if err = config.DB.Create(material).Error; err != nil {
		return err
	}
	return nil
}

//GetMaterialByID ... Fetch only one user by Id
func GetMaterialByID(material *material, id string) (err error) {
	if err = config.DB.Where("id = ?", id).First(material).Error; err != nil {
		return err
	}
	return nil
}

//UpdateMaterial ... Update user
func UpdateMaterial(material *material, id string) (err error) {
	fmt.Println(material)
	config.db.Save(material)
	return nil
}

//DeleteMaterial ... Delete user
func DeleteMaterial(material *material, id string) (err error) {
	config.db.Where("id = ?", id).Delete(material)
	return nil
}
