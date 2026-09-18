import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const router = express.Router();

const uploadDir = path.join(process.cwd(), 'uploads');

if (!fs.existsSync(uploadDir)) {
	fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, uploadDir);
	},
	filename(req, file, cb) {
		cb(
			null,
			`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
		);
	},
});

function checkFileTypes(file, cb) {
	const filetypes = /jpg|jpeg|png|webp/;

	const extname = filetypes.test(
		path.extname(file.originalname).toLowerCase()
	);

	const mimetype = filetypes.test(file.mimetype);

	if (extname && mimetype) {
		cb(null, true);
	} else {
		cb(new Error('Images only!'));
	}
}

const upload = multer({
	storage,
	fileFilter(req, file, cb) {
		checkFileTypes(file, cb);
	},
});

router.post('/', upload.single('image'), (req, res) => {
	if (!req.file) {
		return res.status(400).json({
			message: 'No image uploaded',
		});
	}

	res.json({
		message: 'Image uploaded',
		image: `/uploads/${req.file.filename}`,
	});
});

export default router;