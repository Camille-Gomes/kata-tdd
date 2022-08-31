export const updateQuality = (item) => {
    
        if(item.sellIn > 0) {
            item.sellIn -= 1
            item.quality -= 1
        }
    
        if(item.sellIn <= 0) {
            item.sellIn -= 1
            item.quality -= 2
        }
        
    return item
}