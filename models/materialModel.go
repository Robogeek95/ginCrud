package models

// Material type struct/class
type Material struct {
	ID     uint   `json:"id"`
	Name   string `json:"name"`
	Pages  string `json:"pages"`
	Author string `json:"author"`
	Year   string `json:"year"`
	Rating string `json:"rating"`
}

// TableName ... material.tableName
func (b *Material) TableName() string {
	return "material"
}
