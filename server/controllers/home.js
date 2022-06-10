export const hiMessage = async (req, res) => {
  try {
    res.json('Hii');
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
