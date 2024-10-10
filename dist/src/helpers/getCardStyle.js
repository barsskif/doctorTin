const MAX_VISIBILITY = 3;
export const getCardStyle = ({ isActive, offset }) => ({
    "--active": isActive ? 1 : 0.7,
    "--offset": `${offset / 3}`,
    "--direction": `${Math.sign(offset)}`,
    "--abs-offset": `${Math.abs(offset) / 3}`,
    "--z-index": `${isActive ? -1 : 0}`,
    pointerEvents: isActive ? "auto" : "none",
    opacity: Math.abs(offset) >= MAX_VISIBILITY ? "0.3" : "1",
    display: Math.abs(offset) > MAX_VISIBILITY ? "none" : "block",
    margin: isActive ? "" : "10px",
    marginTop: isActive ? "" : "-100px",
});
//# sourceMappingURL=getCardStyle.js.map