package models

import (
	"time"
)

// Material type struct/class
type Material struct {
	ID        uint      `json:"id"`
	Name      string    `json:"name"`
	Pages     string    `json:"pages"`
	Author    string    `json:"author"`
	Year      string    `json:"year"`
	Rating    string    `json:"rating"`
	Desc      string    `json:"desc"`
	Published time.Time `json:"published"`
	Created   time.Time `json:"created"`
	Updated   time.Time `json:"updated"`
}

// TableName ... material.tableName
func (b *Material) TableName() string {
	return "material"
}
