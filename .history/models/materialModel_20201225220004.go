package models

// Material type struct/class
type Material struct {
	ID      uint   `json:"id"`
	Name    string `json:"name"`
	Email   string `json:"email"`
	Phone   string `json:"phone"`
	Address string `json:"address"`
}

// TableName ... material.tableName
func (b *Material) TableName() string {
	return "material"
}
