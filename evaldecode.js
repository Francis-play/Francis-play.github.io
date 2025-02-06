function EvalDecode(source) {
  self._eval = self.eval;

  self.eval = (_code) => {
    self.eval = self._eval;
    return _code;
  };

  return self._eval(source);
}
