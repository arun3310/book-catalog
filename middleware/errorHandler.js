module.exports = (err, req, res, next) => {
if (err.name === 'ValidationError') {
return res.status(400).json({ error: err.message });
}
if (err.code === 11000) {
return res.status(400).json({ error: 'Duplicate ISBN' });
}
res.status(500).json({ error: 'Server Error' });
};