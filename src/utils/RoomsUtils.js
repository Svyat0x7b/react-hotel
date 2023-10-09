export const getRoomNameByType = (roomType) => {
    let roomName;
    switch (roomType) {
        case 1:
            roomName = 'Single Room';
            break;
        case 2:
            roomName = 'Double Room';
            break;
        case 3:
            roomName = 'Lux Room';
            break;
        case 4:
            roomName = 'VIP Room';
            break;
        default:
            roomName = 'Common Room';
            break;
    }
    return roomName;
};
export const castPriceToTemplate = (roomPrice) => {
    return roomPrice.toFixed(2);
};