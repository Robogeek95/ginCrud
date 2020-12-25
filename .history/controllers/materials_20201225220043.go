package controllers

//GetAllMaterials Fetch all materials data
func GetAllMaterials(material *[]Materials) (err error) {
	if err = Config.DB.Find(user).Error; err != nil {
		return err
	}
	return nil
}
