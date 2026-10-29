import styles from './FormField.module.css'

export default function FormField({
  as = 'input',
  id,
  name,
  label,
  value,
  onChange,
  error,
  required = false,
  autoComplete,
  placeholder,
  type = 'text',
  options = [],
  rows = 5,
}) {
  const errorId = `error-${id}`
  const commonProps = {
    id,
    name,
    value,
    onChange,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? errorId : undefined,
    ...(required ? { required: true, 'aria-required': 'true' } : {}),
  }

  return (
    <div className={styles.formField}>
      <label htmlFor={id}>
        {label}
        {required && (
          <span className="required" aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </label>

      {as === 'select' && (
        <select {...commonProps}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}

      {as === 'textarea' && (
        <textarea {...commonProps} rows={rows} placeholder={placeholder} />
      )}

      {as === 'input' && (
        <input
          {...commonProps}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
      )}

      {error && (
        <p className={styles.formError} id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
